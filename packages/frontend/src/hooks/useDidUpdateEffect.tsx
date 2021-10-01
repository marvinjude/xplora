import { useEffect, useRef, EffectCallback, DependencyList } from "react";

function useDidUpdateEffect(fn: EffectCallback, inputs: DependencyList) {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) fn();
    else didMountRef.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, inputs);
}

export default useDidUpdateEffect;
