<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>Wormate Background Pro</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #0a0f1a; /* لون احتياطي */
        }
        canvas {
            display: block;
            touch-action: none;
        }
    </style>
</head>
<body>
    <script src="https://cdn.jsdelivr.net/npm/pixi.js@7.x/dist/pixi.min.js"></script>

    <script>
        (async function() {
            // 1. إعداد التطبيق
            const app = new PIXI.Application({
                width: window.innerWidth,
                height: window.innerHeight,
                backgroundColor: 0x0a0f1a,
                antialias: true,
                resolution: window.devicePixelRatio || 1,
                autoDensity: true,
                resizeTo: window // يجعل التطبيق يتمدد تلقائياً مع الشاشة
            });
            document.body.appendChild(app.view);

            // 2. تعريف الروابط (تأكد من صلاحية الروابط أو استبدالها)
            const ASSETS = {
                confetti: 'https://wormate.io/images/confetti-valday2023.png',
                bgPattern: 'https://wormate.io/images/bg-event-pattern-valday2023.png',
                bgObstacle: 'https://wormate.io/images/bg-obstacle.png'
            };

            const bgContainer = new PIXI.Container();
            app.stage.addChild(bgContainer);

            // 3. تحميل الأصول برمجياً
            let textures = {};
            try {
                for (let key in ASSETS) {
                    textures[key] = await PIXI.Assets.load(ASSETS[key]);
                }
            } catch (e) {
                console.warn("تحذير: بعض الصور لم تتحمل بسبب قيود الموقع الأصلي (CORS).");
            }

            // --- إعداد الخلفية الأساسية (النمط المتكرر) ---
            let patternSprite;
            if (textures.bgPattern) {
                // استخدام TilingSprite لحل مشكلة الفراغات
                patternSprite = new PIXI.TilingSprite(
                    textures.bgPattern,
                    app.screen.width,
                    app.screen.height
                );
                patternSprite.tileScale.set(0.5); // تصغير حجم النمط قليلاً
                patternSprite.alpha = 0.3;
            } else {
                // خلفية بديلة في حال فشل التحميل
                patternSprite = new PIXI.Graphics();
                patternSprite.beginFill(0x1a2a3a);
                patternSprite.drawRect(0, 0, app.screen.width, app.screen.height);
                patternSprite.endFill();
            }
            bgContainer.addChild(patternSprite);

            // --- إعداد جزيئات الكونفيتي (العناصر العائمة) ---
            const particles = [];
            if (textures.confetti) {
                const count = 15;
                for (let i = 0; i < count; i++) {
                    const p = new PIXI.Sprite(textures.confetti);
                    p.anchor.set(0.5);
                    p.scale.set(Math.random() * 0.5 + 0.5);
                    p.alpha = 0.5;
                    p.tint = [0xff6b6b, 0x4ecdc4, 0xffe66d, 0xff9f4a][Math.floor(Math.random() * 4)];
                    
                    // بيانات الحركة
                    p.customData = {
                        x: Math.random() * app.screen.width,
                        y: Math.random() * app.screen.height,
                        vx: (Math.random() - 0.5) * 2,
                        vy: (Math.random() - 0.5) * 2,
                        rot: (Math.random() - 0.5) * 0.02
                    };
                    
                    bgContainer.addChild(p);
                    particles.push(p);
                }
            }

            // --- إعداد العوائق الثابتة (في الزوايا) ---
            if (textures.bgObstacle) {
                const obs = new PIXI.Sprite(textures.bgObstacle);
                obs.anchor.set(0.5);
                obs.alpha = 0.1;
                obs.position.set(app.screen.width * 0.9, app.screen.height * 0.8);
                bgContainer.addChild(obs);
            }

            // 4. حلقة التحديث (Animation Loop)
            let time = 0;
            app.ticker.add((delta) => {
                time += 0.01 * delta;

                // تحريك النمط الخلفي بهدوء
                if (patternSprite instanceof PIXI.TilingSprite) {
                    patternSprite.tilePosition.x += 0.5 * delta;
                    patternSprite.tilePosition.y += 0.5 * delta;
                    patternSprite.width = app.screen.width;
                    patternSprite.height = app.screen.height;
                }

                // تحريك الجزيئات
                particles.forEach(p => {
                    p.customData.x += p.customData.vx;
                    p.customData.y += p.customData.vy;
                    p.rotation += p.customData.rot;

                    // ارتداد من الحواف
                    if (p.customData.x < 0 || p.customData.x > app.screen.width) p.customData.vx *= -1;
                    if (p.customData.y < 0 || p.customData.y > app.screen.height) p.customData.vy *= -1;

                    p.x = p.customData.x;
                    p.y = p.customData.y;
                    
                    // تأثير نبض خفيف
                    p.scale.set((Math.sin(time + particles.indexOf(p)) * 0.1) + 0.6);
                });
            });

            // 5. معالجة تغيير حجم الشاشة
            window.addEventListener('resize', () => {
                app.renderer.resize(window.innerWidth, window.innerHeight);
                if (!(patternSprite instanceof PIXI.TilingSprite)) {
                    patternSprite.clear();
                    patternSprite.beginFill(0x1a2a3a);
                    patternSprite.drawRect(0, 0, app.screen.width, app.screen.height);
                    patternSprite.endFill();
                }
            });

        })();
    </script>
</body>
</html>
