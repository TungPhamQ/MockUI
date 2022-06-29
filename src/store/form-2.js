export const Form2 = {
  name: "FORM 2",
  key: 2,
  photoBoxes: [
    {
      title: "顔写真の登録",
      required: false,
      description:
        "システムの本人アイコンに使用します。あなたの顔が分かる写真を登録してください。未登録の場合、姓名の頭文字が表示されます。顔写真見本のように撮影してください。また、背景は白、スーツ着用、身だしなみルールに沿って撮影をお願いいたします。",
      imgSource: "../../assets/photo_import.png",
      guide: `ファイルをドラッグ&ドロップ \n
            ファイルをドロップするか、\n
            ファイルを参照する`,
    },
    {
      title: "本人確認書類",
      required: true,
      description: "運転免許証両面もしくは住民票を添付してください。",
      imgSource: "",
      guide: `ファイルをドラッグ&ドロップ \n
            ファイルをドロップするか、\n
            ファイルを参照する`,
    },
  ],
  textInputBoxes: [
    {
      title: "基本情報登録",
      key: 1,
      description:
        "外国式氏名が戸籍に記載されている場合、国際結婚により戸籍上の姓が外国式の姓となっている、もしくは重国籍で戸籍上の氏名が外国式の氏名となっている場合、戸籍上の綴りで入力してください。",
      input: [
        {
          title: "姓",
          key: 1,
          required: true,
          placeholder: "入力してください",
        },
        {
          title: "名",
          key: 2,
          required: true,
          placeholder: "入力してください",
        },
        {
          title: "セイ",
          key: 3,
          required: true,
          placeholder: "入力してください",
        },
        {
          title: "メイ",
          key: 4,
          required: true,
          placeholder: "入力してください",
        },
        {
          title: "姓（ローマ字）",
          key: 5,
          required: true,
          placeholder: "入力してください",
        },
        {
          title: "名（ローマ字）",
          key: 6,
          required: true,
          placeholder: "入力してください",
        },
      ],
    },
  ],
  radioBoxes: [
    {
      name: "this is radio box",
      key: 1,
      required: true,
      options: [
        {
          id: "radio 1",
          value: "this is value radio 1",
        },
        {
          id: "radio 2",
          value: "this is value radio 2",
        },
      ],
    },
  ],
};
