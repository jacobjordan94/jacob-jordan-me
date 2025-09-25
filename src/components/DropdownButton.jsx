import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

/**
 * DropdownButton component using shadcn/ui DropdownMenu.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - The dropdown content (e.g., <DropdownMenuItem />s)
 * @param {React.ComponentType} props.ButtonContent - The button trigger content (rendered inside a <button>)
 * @param {'start'|'center'|'end'} props.align - Horizontal alignment of the dropdown relative to the trigger
 * @param {'top'|'bottom'|'left'|'right'} props.side - Side of the trigger to place the dropdown
 * @param {number} props.sideOffset - Offset in pixels between trigger and dropdown
 * @param {string|number|null} props.dropdownWidth - Optional min-width for the dropdown in px (e.g., `240`)
 * @param {string} props.className - Optional extra class for the button
 * @param {string} props.dropdownContentClassName - Optional extra class for dropdown content
 */
export default function DropdownButton({
    children,
    className = '',
    dropdownContentClassName = '',
    ButtonContent,
    align = 'start',
    side = 'bottom',
    sideOffset = 4,
    dropdownWidth = null
}) {
    return (
        <DropdownMenu className="border-none">
            <DropdownMenuTrigger asChild>
                <button className={cn('flex items-center', className)}>
                    {ButtonContent && <ButtonContent />}
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align={align}
                side={side}
                sideOffset={sideOffset}
                className={cn(
                    'z-50 rounded-md bg-neutral-700 text-white shadow-lg border-0 p-0',
                    dropdownWidth && `min-w-[${dropdownWidth}px]`,
                    dropdownContentClassName
                )}
            >
                {children}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
