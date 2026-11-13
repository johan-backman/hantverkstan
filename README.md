# Hantverkstan på Heden

Webbplatsen ligger i `dist/`. Redigera `dist/index.html` för att ändra texter, projekt och kontaktuppgifter. I `dist/styles.css` ligger färger, typsnitt och gemensamma avstånd överst. Bilderna ligger i `dist/bilder/`. Vid ett bildbyte, uppdatera filnamn, alt-text och mått i HTML. Huvudbilden har även två mindre varianter i `srcset`.

## Granska lokalt

Kör från projektmappen:

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory dist
```

Öppna [förhandsvisningen](http://127.0.0.1:4173/). Använd ett vanligt webbläsarfönster för datorvyn. I Chrome eller Edge öppnar du utvecklarverktygen och väljer ikonen för mobil och surfplatta. Prova exempelvis 390 pixlar för mobil och 1280 pixlar för dator. Ladda om efter en ändring.

## Publicera på Cloudflare Pages

Anslut GitHub-repot i Workers & Pages genom att skapa ett Pages-projekt med Git-integration. Ge Cloudflare åtkomst till just det här repot och välj följande inställningar.

| Inställning | Värde |
| --- | --- |
| Produktionsgren | `main` |
| Ramverk | None |
| Byggkommando | Lämna tomt |
| Publiceringsmapp (Build output directory) | `dist` |
| Rotmapp (Root directory) | Lämna standardvärdet |

Cloudflare publicerar filerna i `dist/` och uppdaterar sajten när du pushar ändringar till `main`. [Cloudflares guide till Git-integration](https://developers.cloudflare.com/pages/get-started/git-integration/)

## Uppgifter att komplettera

- **[PROJEKTFOTON SAKNAS]** De bifogade verkstadsbilderna illustrerar arbetsmoment. Om ni har bilder från de specifika uppdragen kan ni ersätta arbetsbilderna och uppdatera bildtexterna.
- **[BESÖKSUPPGIFTER SAKNAS]** Lägg till besöksadress och tider i kontaktsektionen om Erika tar emot besök. Telefon och mejl kommer från Erikas inlägg om uppdrag.
- **[VIDEOFILER SAKNAS]** Filmlänken går till Erikas Instagram. Om ni vill visa en film direkt på sidan behövs en videofil som ni kan publicera.
