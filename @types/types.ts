export const ApplicationCommandType = {
  CHAT_INPUT: 1,
  USER: 2,
  MESSAGE: 3
} as const

export type ApplicationCommandType = typeof ApplicationCommandType[keyof typeof ApplicationCommandType]

export const ApplicationCommandOptionType = {
  SUB_COMMAND: 1,
  SUB_COMMAND_GROUP: 2,
  STRING: 3,
  INTEGER: 4,
  BOOLEAN: 5,
  USER: 6,
  CHANNEL: 7,
  ROLE: 8,
  MENTIONABLE: 9,
  NUMBER: 10,
  ATTACHMENT: 11
} as const

export type ApplicationCommandOptionType = typeof ApplicationCommandOptionType[keyof typeof ApplicationCommandOptionType]

export const ChannelType = {
  GUILD_TEXT: 0,
  DM: 1,
  GUILD_VOICE: 2,
  GROUP_DM: 3,
  GUILD_CATEGORY: 4,
  GUILD_NEWS: 5,
  GUILD_NEWS_THREAD: 10,
  GUILD_PUBLIC_THREAD: 11,
  GUILD_PRIVATE_THREAD: 12,
  GUILD_STAGE_VOICE: 13,
  GUILD_DIRECTORY: 14,
  GUILD_FORUM: 15,
  GUILD_STORE: 16,
  UNKNOWN: 17
} as const

export type ChannelType = typeof ChannelType[keyof typeof ChannelType]

export const InteractionType = {
  PING: 1,
  APPLICATION_COMMAND: 2,
  MESSAGE_COMPONENT: 3,
  APPLICATION_COMMAND_AUTOCOMPLETE: 4,
  MODAL_SUBMIT: 5
} as const

export type InteractionType = typeof InteractionType[keyof typeof InteractionType]

export const InteractionCallbackType = {
  PONG: 1,
  CHANNEL_MESSAGE_WITH_SOURCE: 4,
  DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE: 5,
  DEFERRED_UPDATE_MESSAGE: 6,
  UPDATE_MESSAGE: 7,
  APPLICATION_COMMAND_AUTOCOMPLETE_RESULT: 8,
  MODAL: 9
} as const

export type InteractionCallbackType = typeof InteractionCallbackType[keyof typeof InteractionCallbackType]

export const ComponentTypes = {
  ActionRows: 1,
  Button: 2,
  SelectMenu: 3,
  TextInput: 4
} as const

export type ComponentTypes = typeof ComponentTypes[keyof typeof ComponentTypes]

export const ButtonStyles = {
  Primary: 1,
  Secondary: 2,
  Success: 3,
  Danger: 4,
  Link: 5
} as const

export type ButtonStyles = typeof ButtonStyles[keyof typeof ButtonStyles]

export const TextInputStyle = {
  Short: 1,
  Paragraph: 2
} as const

export type TextInputStyle = typeof TextInputStyle[keyof typeof TextInputStyle]

export const AllowedMentionTypes = {
  "RoleMentions": "roles",
  "UserMentions": "users",
  "EveryoneMentions": "everyone"
} as const

export type AllowedMentionTypes = typeof AllowedMentionTypes[keyof typeof AllowedMentionTypes]

export const EmbedTypes = {
  rich: "rich",
  image: "image",
  video: "video",
  gifv: "gifv",
  article: "article",
  link: "link"
} as const

export type EmbedTypes = typeof EmbedTypes[keyof typeof EmbedTypes]

export const MessageActivityTypes = {
  JOIN: 1,
  SPECTATE: 2,
  LISTEN: 3,
  JOIN_REQUEST: 5
} as const

export type MessageActivityTypes = typeof MessageActivityTypes[keyof typeof MessageActivityTypes]

export const MessageTypes = {
  DEFAULT: 0,
  RECIPIENT_ADD: 1,
  RECIPIENT_REMOVE: 2,
  CALL: 3,
  CHANNEL_NAME_CHANGE: 4,
  CHANNEL_ICON_CHANGE: 5,
  CHANNEL_PINNED_MESSAGE: 6,
  GUILD_MEMBER_JOIN: 7,
  USER_PREMIUM_GUILD_SUBSCRIPTION: 8,
  USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_1: 9,
  USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_2: 10,
  USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3: 11,
  CHANNEL_FOLLOW_ADD: 12,
  GUILD_DISCOVERY_DISQUALIFIED: 14,
  GUILD_DISCOVERY_REQUALIFIED: 15,
  GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING: 16,
  GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING: 17,
  THREAD_CREATED: 18,
  REPLY: 19,
  CHAT_INPUT_COMMAND: 20,
  THREAD_STARTER_MESSAGE: 21,
  GUILD_INVITE_REMINDER: 22,
  CONTEXT_MENU_COMMAND: 23
} as const

export type MessageTypes = typeof MessageTypes[keyof typeof MessageTypes]

export const StickerType = {
  STANDARD: 1,
  GUILD: 2
} as const

export type StickerType = typeof StickerType[keyof typeof StickerType]

export const Locales = {
  "da": "Danish",
  "de": "German",
  "en-GB": "English, UK",
  "en-US": "English, US",
  "es-ES": "Spanish",
  "fr": "French",
  "hr": "Croatian",
  "it": "Italian",
  "lt": "Lithuanian",
  "hu": "Hungarian",
  "nl": "Dutch",
  "no": "Norwegian",
  "pl": "Polish",
  "pt-BR": "Portuguese, Brazilian",
  "ro": "Romanian, Romania",
  "fi": "Finnish",
  "sv-SE": "Swedish",
  "vi": "Vietnamese",
  "tr": "Turkish",
  "cs": "Czech",
  "el": "Greek",
  "bg": "Bulgarian",
  "ru": "Russian",
  "uk": "Ukrainian",
  "hi": "Hindi",
  "th": "Thai",
  "zh-CN": "Chinese, China",
  "ja": "Japanese",
  "zh-TW": "Chinese, Taiwan",
  "ko": "Korean"
} as const

export type Locales = typeof Locales[keyof typeof Locales]