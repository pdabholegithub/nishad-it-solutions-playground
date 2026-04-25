@echo off
rem -------------------------------------------------------------------
rem  run_local.bat – convenient script to install deps and launch dev server
rem -------------------------------------------------------------------

rem Change to the directory of this script (project root)
cd /d "%~dp0"

echo Installing npm dependencies...
npm install
if errorlevel 1 (
  echo ❌ npm install failed. Exiting.
  exit /b 1
)

echo Starting Vite development server...
npm run dev

rem End of script
