import { ApplicationCommandInteraction, InteractionResponse } from "../../@types/index.d.ts"
import { InteractionCallbackType } from "../../@types/types.ts"

export function omikuji(interaction:ApplicationCommandInteraction):InteractionResponse {
  // コマンドの情報を取得
  const data = interaction.data
  // コマンドの送信者の情報を取得
  const member = interaction.member

  const num = Math.floor(Math.random() * 5)

  let unsei = "初期状態"

  if(num == 0){
    unsei = "大凶"
  }
  if(num == 1){
    unsei = "凶"
  }
  if(num == 2){
    unsei = "大吉"
  }
  if(num == 3){
    unsei = "吉"
  }
  if(num == 4){
    unsei = "中吉"
  }
  if(num == 5){
    unsei = "小吉"
  }



  // レスポンス本体
  const res: InteractionResponse = {
      // Type 4 reponds with the below message retaining the user's
      // input at the top.
      type: InteractionCallbackType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: `あなたの運勢は${unsei}です`,
      }
    }
  return res;
}