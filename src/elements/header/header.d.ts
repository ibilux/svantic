import { SvelteComponentTyped} from 'svelte/internal';
import { Style } from '../../style';
import { Component } from '../../component';
interface HeaderProps extends Component {
    class?: string;
    active?: boolean;
    disabled?: boolean;
    fluid?: boolean;
    circular?: boolean;
    loading?: boolean;
    primary?: boolean;
    secondary?: boolean;
    compact?: boolean;
    basic?: boolean;
    toggle?: boolean;
    positive?: boolean;
    negative?: boolean;
    tertiary?: boolean;
    inverted?: boolean;
    icon?: boolean;
    style?: Style;
}
/**
 * Svantic Header
 */
declare class Header extends SvelteComponentTyped<HeaderProps> {
}
export default Header;
