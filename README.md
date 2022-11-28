## CloudAtlas

A Felhőatlasz Angular projektben a felhők csodálatos világába nyerhetünk bepillantást. A nyitó oldalon néhány érdekes tény olvasható a felhőkről.
A nemzetközi felhőosztályozást, a hozzájuk tartozó synop kódokat sok-sok kép és a
felhők részletes bemutatása illusztrálja.

A felhők a lista oldalon kártyákon jelennek meg, egy-egy felhőtípusról két jellemző képet is bemutatunk. A `részletek` link egy nagyobb ablakban jeleníti meg a képet és a részleteket. A felhőkről megjelenített információk a kártyákon található gombra kattintva szerkesztehtők, a kártyákon törlés goimb is található, mely a végleges törlés előtt megerősítést kér a véletlen törlés elkerülése végett.

A listázó oldal tetjén mezőnkénti szűrésre és keresésre is lehetőség van.

Új felhő is fölvehető a megfelelő gombra kattintással, a beviteli mezők validálva vannak.

## Az alkalmazás indítása

-- `npm i` - függőségek telepítése

Az alkalmazás JSON servert használ adatbázisként, így a következő lépés a JSON server indítása.

-- `json-server ./data/data.json --watch`

-- `npm start` az alaklamzás indítása

## Fejlesztői eszközök

A formázáshoz a Bootstrap, az ikonokhoz a Font-awesome, a lapozóhoz az ngx-pagination eszközt használtuk föl.
