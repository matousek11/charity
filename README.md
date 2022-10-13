# Charita

## Rozcestník
* [O aplikaci](#o-aplikaci)
* [Použité technologie](#použité-technologie)
* [Instalace](#instalace)

## O aplikaci

Aplikace využívá otevřená data KHK a byla vyvinuta během [Hackathonu 2022](https://www.datakhk.cz/pages/hackathony). Jejím cílem je ukázat uživateli sbírky v jeho okolí, tak aby mohl darovat své peníze na něco v jeho okolí. Uživatel tedy zvolí rádius a poté klikne na mapu a v okruhu rádiusu, který nastavil se mu poté zobrazí seznam veřejných sbírek a informace o nich.

Zde je vidět landing page s popisem aplikace:
![VSUHK landing page](/VSUHK-landing page.png)
Zde je vidět mapa s výběrem rádiusu:
![VSUHK mapa](/VSUHK-mapa)
Zde jsou vidět data v okolí dle zvoleného rádiusu:
![VSUHK data](/VSUHK-data)

## Použité technologie

- React
- Next.js
- google maps api
- [Data KHK-veřejné sbírky](https://www.datakhk.cz/datasets/d9c2591d1ba14f8187970bb5311b2bdc_0/about)

## Instalace
- spustit přes batch: 
```
yarn install
yarn dev
```
