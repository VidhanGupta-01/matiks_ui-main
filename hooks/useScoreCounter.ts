import { useEffect, useCallback } from 'react';
import {
  useSharedValue,
  withTiming,
  withSequence,
  Easing,
  runOnJS,
} from 'react-native-reanimated';
import { TIMING, GAME_DATA } from '../constants/theme';

/**
 * Drives the score counter animation entirely on the UI thread.
 * The derived display value is read via useDerivedValue in the component.
 *
 * onComplete fires (JS side) when the count finishes so downstream
 * animations can be staggered.
 */
export function useScoreCounter(onComplete: () => void) {
  const scoreProgress = useSharedValue(0); // 0 → 1

  const start = useCallback(() => {
    // Slight overshoot: count to 1.04 then settle to 1.0
    scoreProgress.value = withSequence(
      withTiming(1.04, {
        duration: TIMING.scoreCount,
        easing: Easing.out(Easing.cubic),
      }),
      withTiming(
        1.0,
        { duration: 180, easing: Easing.out(Easing.quad) },
        (finished) => {
          if (finished) {
            runOnJS(onComplete)();
          }
        },
      ),
    );
  }, []);

  useEffect(() => {
    const timeout = setTimeout(start, 600);
    return () => clearTimeout(timeout);
  }, [start]);

  return { scoreProgress };
}