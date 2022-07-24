import React from 'react';
import useSound from 'use-sound';
export const useSoundController = () =>
{
    const [play] = useSound('/sounds/boxingsprite.mp3');
    return {
        oneTwo,
        oneFour,
        oneSix,
        threeTwo,
        threeFour,
        threeSix,
        fiveTwo,
        fiveFour,
        fiveSix
    }
  }

  export default useSoundController;