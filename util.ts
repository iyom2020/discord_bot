import { 
    InteractionType,
    ComponentTypes
 } from "./@types/types.ts"
import { 
    ActionRows,
    ApplicationCommandInteraction,
    Buttons,
    Interaction,
    MessageComponent,
    MessageComponentInteraction,
    SelectMenu,
    TextInput
 } from "./@types/index.d.ts"

export function isCommand(value:Interaction): value is ApplicationCommandInteraction {
    return value.type == InteractionType.APPLICATION_COMMAND && 'data' in value;
}

export function isMessage(value:Interaction): value is MessageComponentInteraction {
    return value.type == InteractionType.MESSAGE_COMPONENT && 'message' in value;
}

export function isActionRows(value:MessageComponent): value is ActionRows {
    return value.type == ComponentTypes.ActionRows;
}

export function isButtons(value:MessageComponent): value is Buttons {
    return value.type == ComponentTypes.Button;
}

export function isSelectMenu(value:MessageComponent): value is SelectMenu {
    return value.type == ComponentTypes.SelectMenu
}

export function isTextInput(value:MessageComponent): value is TextInput {
    return value.type == ComponentTypes.TextInput
}