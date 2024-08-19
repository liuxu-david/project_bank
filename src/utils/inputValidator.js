export const rules = {
    username:[ {required: true, message:"请输入“iGTB平台编号/登录名称”。"},{ pattern:/^((\d{14})|([A-Za-z]{8,16}))$/, message: "请输入有效的“iGTB平台编号/登录名称”。"}],
    codename: [{required: true,message:"请输入“使用者代号”。"},{ pattern:/^[A-Za-z0-9]{2,6}$/,message: "请输入有效的“使用者代号”。"}],
    password: [{required: true,message:"请输入“密码”。"},{ pattern:/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,12}$/, message: "请输入有效的“密码”。"}],
    authcode: [{required: true,message:"请输入“验证码”。"},{  min: 4 , max:4, message: "请输入有效的“验证码”。"}],
  };