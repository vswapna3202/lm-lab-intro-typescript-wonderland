import { endAdventure, haveAdventures } from '../..';
import { askQuestion, print } from '../ui/console';

const GARDEN_PLANTS = 
    ['Tulips🌷','Dahlias🌸','Roses🌹','Water Lilies🌺','Hydrangeas🌼', 
    'Daisies'] as const;

interface WalkResult {
    walked: boolean;
    plantsSeen: readonly string[];
}

function walkingInGarden() : WalkResult {
    const plantsSeen = GARDEN_PLANTS.slice(0,5);
    const walked = plantsSeen.length > 0;
    return {walked, plantsSeen};
}

const walkResult = walkingInGarden();

export function goForWalk() {
    if (walkResult.walked){
        print('\nYou are taking a 🚶 walk 🚶in the garden and looking at: ');
        walkResult.plantsSeen.forEach(plant => {console.log(`${plant}`)});
        print('\n');
    } else{
        print('\nYou are not on a walk in the gardens\n');
        endAdventure();
    }

    return askQuestion(
        'Press ENTER to re-enter Wonderland! ',
        haveAdventures
    );
}