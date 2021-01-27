import { SvelteComponentTyped} from 'svelte/internal'
import type { SharedProps } from '../../shared_props'
import type { Color } from '../../variations'
import { Module } from '../module'
import type Controller from './controller'
import {ToastSettings} from './settings'

declare type Type = 'toast' | 'message'

interface ToastProps extends SharedProps, Module<Controller, ToastSettings> {
  type?: Type
  color?: Color
  icon?: boolean
}
/**
 * Vomantic Toast
 */
declare class Toast extends SvelteComponentTyped<ToastProps> {}
export default Toast
