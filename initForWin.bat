@echo off
echo "BOT_TOKEN����͂��Ă������� : "
SET /P BOT_TOKEN=
echo "Application_ID����͂��Ă������� : "
SET /P Application_ID=

echo �K�v�Ȃ��̂̃_�E�����[�h���J�n���܂�

powershell -NoProfile -ExecutionPolicy Unrestricted -Command "& { iwr https://deno.land/x/install/install.ps1 -useb | iex }"
%HOMEPATH%\.deno\bin\deno install -qAn vr https://deno.land/x/velociraptor@1.0.1/cli.ts
if %errorlevel%==0 (
    echo BOT_TOKEN= %BOT_TOKEN% >> env
    echo Application_ID=%Application_ID% >> env

    mkdir .vscode
    (
    echo {
    echo "deno.enable": true,
    echo "deno.path": "%HOMEPATH%\.deno\bin"
    echo }
    )>.vscode\setting.json

    (
    echo {
    echo "recommendations": [
    echo "denoland.vscode-deno"
    echo ]
    echo }
    )>.vscode\extensions.json

    %HOMEPATH%\.deno\bin\vr create
)
else pause