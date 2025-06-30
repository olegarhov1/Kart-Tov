@echo off
REM --- Путь к проекту (замени на нужный при необходимости)
cd /d C:\Users\Ronin\web\karusel

REM --- Запуск http-server на порту 8000
start "" http://localhost:8000/index.html
http-server . -p 8000
