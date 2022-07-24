
import useSound from 'use-sound';

export const useSoundController = () =>
{
    const [oneTwo] = useSound(
        '/sounds/onetwo.mp3',
        { volume: 0.25 }
    );
    const [oneFour] = useSound(
        '/sounds/onefour.mp3',
        { volume: 0.25 }
    );
    const [oneSix] = useSound(
        '/sounds/onesix.mp3',
        { volume: 0.25 }
    );

    const [threeTwo] = useSound(
        '/sounds/threetwo.mp3',
        { volume: 0.25 }
    );
    const [threeFour] = useSound(
        '/sounds/threefour.mp3',
        { volume: 0.25 }
    );
    const [threeSix] = useSound(
        '/sounds/threesix.mp3',
        { volume: 0.25 }
    );

    const [fiveTwo] = useSound(
        '/sounds/fivetwo.mp3',
        { volume: 0.25 }
    );
    const [fiveFour] = useSound(
        '/sounds/fivefour.mp3',
        { volume: 0.25 }
    );
    const [fiveSix] = useSound(
        '/sounds/fivesix.mp3',
        { volume: 0.25 }
    );
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