import { SvelteComponentTyped} from 'svelte/internal';
import { Style } from '../../style';
import { Wide } from '../../variations';
import { SharedProps } from '../../shared_props';
declare type Type = 'ordered' | 'vertical';
declare type Side = 'up' | 'right' | 'bottom' | 'left';
interface StepsProps extends SharedProps {
    class?: string;
    type?: Type;
    side?: Side;
    wide?: Wide;
    style?: Style;
}
/**
 * Sveltic Steps
 */
declare class Steps extends SvelteComponentTyped<StepsProps> {
}
export default Steps;