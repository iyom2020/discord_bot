#! /bin/bash
read -s -p "BOT_TOKENを入力してください: " TOKEN
read -s -p "Application_IDを入力してください: " ID

echo 必要なもののダウンロードを開始します

brew install deno > /dev/null 2>&1
ret=$?
if test $ret -ne 0 ; then
    curl -fsSL https://deno.land/x/install/install.sh | sh > /dev/null 2>&1
    deno_path=$HOME/.deno/bin/deno
else 
    deno_path=$(which deno)
fi


if test $SHELL=/bin/bash ; then
    rc=~/.bashrc
elif test $SHELL=/bin/zsh ; then
    rc=~/.zshrc
else 
    rc=~/.profile
fi

export DENO_INSTALL="$HOME/.deno"
export PATH="$HOME/.deno/bin:$PATH"

echo export DENO_INSTALL="$HOME/.deno" >> $rc
echo export PATH="$HOME/.deno/bin:$PATH" >> $rc

$deno_path install -qAn vr https://deno.land/x/velociraptor@1.5.0/cli.ts > /dev/null 2>&1



echo BOT_TOKEN=$TOKEN >> env
echo Application_ID=$ID >> env

# setting.jsonも生成したい
mkdir .vscode
cat << EOF > .vscode/setting.json
{
    "deno.enable": true,
    "deno.path": "$DENO_INSTALL/bin"
}
EOF

cat << EOF > .vscode/extensions.json
{
    "recommendations": [
        "denoland.vscode-deno"
    ]
}
EOF

$HOME/.deno/bin/vr create

echo "please execution 'source $rc'"
