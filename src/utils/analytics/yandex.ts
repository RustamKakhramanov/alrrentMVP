import { YM_COUNTER_ID } from './config';

export function YandexMetrika() {
  if (!YM_COUNTER_ID) return null;

  return (
    <div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
            ym(${YM_COUNTER_ID}, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });
          `
        }}
      />
      <noscript>
        <div>
          <img src={`https://mc.yandex.ru/watch/${YM_COUNTER_ID}`} style={{ position: 'absolute', left: '-9999px' }} alt="" />
        </div>
      </noscript>
    </div>
  );
}

export function trackYMEvent(eventName: string, eventParams?: Record<string, any>) {
  if (window.ym && YM_COUNTER_ID) {
    window.ym(
      Number(YM_COUNTER_ID),
      'reachGoal',
      eventName,
      eventParams
    );
  }
}

export function trackYMPageView(path: string) {
  if (window.ym && YM_COUNTER_ID) {
    window.ym(
      Number(YM_COUNTER_ID),
      'hit',
      path
    );
  }
}