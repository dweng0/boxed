import nouns from './nouns';
import adjectives from './adjectives';

const getRandomlyFrom       = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
const getRandomNoun         = () => getRandomlyFrom(nouns)
const getRandomAdjective    = () => getRandomlyFrom(adjectives)

export const coaches_inspiration = [
    `a ${getRandomNoun()} could swing better then your ${getRandomAdjective()} little puckered ass`,
    `C'mon. Lets get those ${getRandomAdjective()} fists moving`,
    `You're not dancing. you need to dance like a ${getRandomNoun()}`,
    `You're sucking right now.`,
    `Use those ${getRandomAdjective()} feet of yours`,
    `You call that sorry excuse of a combination lethal?`,
    `Are you boxing or dancing?`,
    `Dont snap those tiny ${getRandomAdjective()} little wrists`,
    `You gotta keep up the pace`,
    `More power`,
    `You gotta pace your sorry little ${getRandomAdjective()} ass`,
    `Check your positioning. your feet are all over the place`,
    `an ${getRandomAdjective()} ox would make short work of your sweet little ass`,
    `Put those petty ${getRandomAdjective()} muscles to work`,
    `You're not moving enough`,
    `You dont belong here, i could be enjoying myself with a ${getRandomNoun()}`,
    `Work through that pain`,
    `Push through that ${getRandomAdjective()} pain`,
    `Flimsy`,
    `Dont snap those ${getRandomAdjective()} wrists`,
    `Keep pushing through`,
    `Hit the bag like its a ${getRandomNoun()}`,
    `Crush that bag, imagine it is ${getRandomNoun()}`,
    `That bag is your ${getRandomNoun()}`,
    `That ${getRandomAdjective()} bag is laughing at your weak ass`,
    `Its like training a ${getRandomNoun()}`,
    `Training you is like training a ${getRandomNoun()}`,
    `My time is precious, get those ${getRandomAdjective()} hits in`,
    `Stop flapping about and hit it`,
    `lets put some fire behind those hits`,
    `a ${getRandomNoun()} can hit better then you`,
    `${getRandomAdjective()} ${getRandomNoun()} can hit better then you`,
]

/**
 * Run the templates throug the sentencer
 * @returns 
 */
export const getRandomizedSentencesToUse = () => coaches_inspiration
