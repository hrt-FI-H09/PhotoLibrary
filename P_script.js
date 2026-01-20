const photoFiles = [
    'IMG (1).jpg',
    'IMG (2).jpg', 'IMG (3).jpg', 'IMG (4).jpg', 'IMG (5).jpg', 'IMG (6).jpg',
    'IMG (7).jpg', 'IMG (8).jpg', 'IMG (9).jpg', 'IMG (10).JPG', 'IMG (11).JPG',
    'IMG (12).JPG', 'IMG (13).JPG', 'IMG (14).JPG', 'IMG (15).JPG', 'IMG (16).JPG',
    'IMG (17).JPG', 'IMG (18).JPG', 'IMG (19).JPG', 'IMG (20).JPG', 'IMG (21).JPG',
    'IMG (22).JPG', 'IMG (23).JPG', 'IMG (24).JPG', 'IMG.JPG', 'IMG_3427.JPG',
    'IMG_3428.JPG', 'IMG_3429.JPG', 'IMG_3430.JPG', 'IMG_3435.JPG', 'IMG_3436.JPG',
    'IMG_3437.JPG', 'IMG_3438.JPG', 'IMG_3439.JPG', 'IMG_3440.JPG', 'IMG_3442.JPG',
    'IMG_3444.JPG', 'IMG_3445.JPG', 'IMG_3446.JPG', 'IMG_3447.JPG', 'IMG_3457.JPG',
    'IMG_3458.JPG', 'IMG_3463.JPG', 'IMG_3464.JPG', 'IMG_3476.JPG', 'IMG_3477.JPG',
    // スクリーンショット (187).png より
    'DSC02338.JPG', 'DSC02340.JPG', 'DSC02340-2.jpg', 'DSC02341.JPG', 'DSC02342.JPG',
    'DSC02343.JPG', 'DSC02346.JPG', 'DSC02347-2.jpg', 'DSC02348.JPG', 'DSC02349-2.jpg',
    'DSC02350.JPG', 'DSC02351.JPG', 'DSC02352.JPG', 'DSC02353-2.jpg', 'DSC02354.JPG',
    'DSC02355-2.jpg', 'DSC02356.JPG', 'DSC02357.JPG', 'DSC02360.JPG', 'DSC02361.JPG',
    'DSC02362.JPG', 'DSC02363.JPG', 'DSC02364.JPG', 'DSC02365.JPG', 'DSC02366.JPG',
    'DSC02370.JPG', 'DSC02371.JPG', 'DSC02372.JPG', 'DSC02373.JPG', 'DSC02374-2.jpg',
    'DSC02375.JPG', 'DSC02380.JPG', 'DSC02381-2.jpg', 'DSC02382.JPG', 'DSC02383-2.jpg',
    'DSC02384-2.jpg', 'DSC02385.JPG', 'DSC02386.JPG', 'DSC02388.JPG', 'DSC02389.JPG',
    'DSC02390.JPG', 'DSC02392.JPG', 'DSC02393.JPG', 'DSC02394.JPG', 'DSC02396.JPG',
    'DSC02399-2.jpg', 'DSC02400.JPG', 'DSC02401.JPG', 'DSC02402-2.jpg', 'DSC02404-2.jpg',
    'DSC02405.JPG', 'DSC02406.JPG', 'DSC02407.JPG', 'DSC02408.JPG', 'DSC02410.JPG',
    'DSC02411.JPG', 'DSC02412.JPG', 'DSC02413.JPG', 'DSC02414.JPG', 'DSC02416-2.jpg',
    'DSC02417.JPG', 'DSC02418-2.jpg', 'DSC02419.JPG', 'DSC02420.JPG', 'DSC02421.JPG',
    'DSC02422.JPG', 'DSC02423.JPG', 'DSC02424.JPG', 'DSC02425.JPG', 'DSC02426.JPG',
    'DSC02427.JPG', 'DSC02428.JPG', 'DSC02429.JPG', 'DSC02430.JPG', 'DSC02433-2.jpg',
    'DSC02435.JPG', 'DSC02438-2.jpg', 'DSC02439.JPG', 'DSC02440-2.jpg', 'DSC02441.JPG',
    'DSC02442.JPG', 'DSC02443.JPG', 'DSC02445-2.jpg', 'DSC02446.JPG', 'DSC02447.JPG',
    'DSC02448.JPG', 'DSC02449.JPG', 'DSC02451.JPG', 'DSC02453-2.jpg', 'DSC02454.JPG',
    'DSC02455.JPG', 'DSC02456.JPG', 'DSC02458.JPG', 'DSC02460.JPG', 'DSC02463.JPG',
    'DSC02465.JPG', 'DSC02466.JPG', 'DSC02467.JPG', 'DSC02468-2.jpg', 'DSC02469.JPG',
    'DSC02471-2.jpg', 'DSC02472.JPG',

    // スクリーンショット (188).png より
    'DSC02473.JPG', 'DSC02476.JPG', 'DSC02477.JPG', 'DSC02478.JPG', 'DSC02479.JPG',
    'DSC02484.JPG', 'DSC02485.JPG', 'DSC02486.JPG', 'DSC02487.JPG', 'DSC02488.JPG',
    'DSC02489.JPG', 'DSC02490-2.jpg', 'DSC02491-2.jpg', 'DSC02493.JPG', 'DSC02494.JPG',
    'DSC02495.JPG', 'DSC02496.JPG', 'DSC02497.JPG', 'DSC02498.JPG', 'DSC02499.JPG',
    'DSC02500.JPG', 'DSC02501.JPG', 'DSC02502.JPG', 'DSC02503.JPG', 'DSC02504.JPG',
    'DSC02505.JPG', 'DSC02506.JPG', 'DSC02507.JPG', 'DSC02508.JPG', 'DSC02509.JPG',
    'DSC02510-2.jpg', 'DSC02513.JPG', 'DSC02514.JPG', 'DSC02515.JPG', 'DSC02516.JPG',
    'DSC02517.JPG', 'DSC02520.JPG', 'DSC02521.JPG', 'DSC02522.JPG', 'DSC02523.JPG',
    'DSC02524.JPG', 'DSC02525.JPG', 'DSC02526.JPG', 'DSC02527.JPG', 'DSC02528.JPG',
    'DSC02529.JPG', 'DSC02530.JPG', 'DSC02531.JPG', 'DSC02532.JPG', 'DSC02533.JPG',
    'DSC02534.JPG', 'DSC02535.JPG', 'DSC02536.JPG', 'DSC02538-2.jpg'
];

const gallery = document.getElementById('gallery');
const modeToggle = document.getElementById('modeToggle');
const downloadBtn = document.getElementById('downloadBtn');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
let isSelectMode = false;

// 1. 画像の生成
photoFiles.forEach(fileName => {
    const div = document.createElement('div');
    div.classList.add('photo-item');
    div.innerHTML = `<img src="images/${fileName}" data-src="images/${fileName}" alt="photo" loading="lazy">`;
    div.addEventListener('click', () => handlePhotoClick(div, fileName));
    gallery.appendChild(div);
});

// 2. モード切り替え
modeToggle.addEventListener('click', () => {
    // 画面幅が狭い（スマホ）場合は何もしない
    if (window.innerWidth <= 768) return;

    isSelectMode = !isSelectMode;
    document.body.classList.toggle('select-mode', isSelectMode);
    modeToggle.textContent = isSelectMode ? '選択を解除' : '選択モードにする';
    
    // CSSの!importantに任せるか、JSで制御
    downloadBtn.style.display = isSelectMode ? 'inline-block' : 'none';
    
    if (!isSelectMode) {
        document.querySelectorAll('.selected').forEach(el => el.classList.remove('selected'));
    }
});

// 3. クリック時の挙動
function handlePhotoClick(element, fileName) {
    if (isSelectMode) {
        element.classList.toggle('selected');
    } else {
        // 通常時は拡大
        lightboxImg.src = `images/${fileName}`;
        lightbox.style.display = 'flex';
    }
}

// 4. 保存（ダウンロード）処理
downloadBtn.addEventListener('click', async () => {
    const selectedPhotos = document.querySelectorAll('.photo-item.selected img');
    if (selectedPhotos.length === 0) {
        alert('画像を選択してください');
        return;
    }

    for (let img of selectedPhotos) {
        const url = img.getAttribute('data-src');
        const name = url.split('/').pop();
        
        // aタグを生成してダウンロードを発火
        const link = document.createElement('a');
        link.href = url;
        link.download = name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // スマホやブラウザの負荷軽減のために少し待機
        await new Promise(resolve => setTimeout(resolve, 500));
    }
});

// ライトボックスを閉じる

document.querySelector('.close').onclick = () => lightbox.style.display = 'none';

