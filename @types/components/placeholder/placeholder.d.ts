import { SharedProps } from '../../shared_props'
import { SvelteComponentTyped } from 'svelte'
import Header from './header'
import Paragraph from './paragraph'
import Image from './image'
import Line from './line'

interface PlaceholderProps extends SharedProps {
  inverted?: boolean
}
/**
 * Vomantic Placeholder
 */
export default class Placeholder extends SvelteComponentTyped<PlaceholderProps> {
  static Header: new () => Header
  static Image: new () => Image
  static Paragraph: new () => Paragraph
  static Line: new () => Line
}
