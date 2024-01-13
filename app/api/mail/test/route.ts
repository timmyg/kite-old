import { NextResponse } from "next/server";

const simpleParser = require("mailparser").simpleParser;

export async function GET() {
  try {
    console.log("one");
    const parsed = await simpleParser(
      `Delivered-To: timmyg13@gmail.com
        Received: by 2002:a05:6022:5206:b0:4b:eb:35ff with SMTP id w6csp1700087law;
                Thu, 11 Jan 2024 06:03:12 -0800 (PST)
        X-Google-Smtp-Source: AGHT+IEHYnZ28gZxxxR1grSjWFLv/AtzCl4DvAkxDLLLVEcAorE6cJp4Xr8QOx0o1Bf/zvbWxKP/
        X-Received: by 2002:a05:620a:8102:b0:781:5d3b:869d with SMTP id os2-20020a05620a810200b007815d3b869dmr1190245qkn.112.1704981792141;
                Thu, 11 Jan 2024 06:03:12 -0800 (PST)
        ARC-Seal: i=1; a=rsa-sha256; t=1704981792; cv=none;
                d=google.com; s=arc-20160816;
                b=obuxQFKfWlNr49SJ32TOT4t0KaWj40NqDZMZNkqJhTCxiA24dBg9oHDS9jJeCY+ily
                 w4N5K8M9ixkh3Lk+hsxqVH05CHatTaVh2uzU9Mj50NeeBz5hKAQ47tcy9APyxYgL7eJK
                 yFZ6qhSOAjPM8u0HqlAZXMUnDV1+mP5o5CqKM3VIQ4g7om9AKuJP4Qidhq53tntEhl5a
                 GAbnQgwrBMJxTBkcl6cfsiTM8xVKUWJkAVHb7DWNgl0TZGEWwe7530bexUAFWStE3EmN
                 rAkKoqopQHijkew60vxshptyer1WIGiqulFiCDZ0LNfu9z3BdJVBldVky+2PzgPN/7Th
                 61pw==
        ARC-Message-Signature: i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;
                h=to:sid:list-unsubscribe:feedback-id:reply-to:subject:message-id
                 :mime-version:from:date:dkim-signature:dkim-signature;
                bh=DwFnayV0SLuoG+k6JxMg7AofnbMLupkyfRhuc/Ssl08=;
                fh=NOPlSX1mHwXx19pUE+60K46uiICq8ZvdglFcJ5IW190=;
                b=pQHjcpAL76sSNWR/HsovI+ARhyL/gnbFIJYsMhUTLhdHzu5GXPqcW2n1dTBGrbdYT7
                 /bVlEhb2BnBddNJU9nKlrLzrRgmLJu77cAb2Tg6dKy5FnKMagK/Pa0VmoJCVmIljyosR
                 ysqSJ6KDqxU/PcD7eVndT1vtg1GNaG5kDFSB3N4HVpv14hZEDuaypO6jzQfI3wk1FWAi
                 5PCOrSsLsL06T1YlMLixDpM2xQ5mLLDsZa/EQuzbvRHk1Z6XXC9MGtSApChyFSXYZOq+
                 S67vDOELeWQ9s769ZwCsLgng6UXB+XnO8SnAHq00mHki8/iA/vC2Du+SLs1SXXxe0RQ4
                 d47w==
        ARC-Authentication-Results: i=1; mx.google.com;
               dkim=pass header.i=@mail.bensbites.co header.s=a8f header.b="lwwkUi/f";
               dkim=pass header.i=@sendgrid.info header.s=smtpapi header.b=YE31SIXW;
               spf=pass (google.com: domain of bounces+29446975-9ed5-timmyg13=gmail.com@em4742.mail.bensbites.co designates 149.72.123.205 as permitted sender) smtp.mailfrom="bounces+29446975-9ed5-timmyg13=gmail.com@em4742.mail.bensbites.co";
               dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=bensbites.co
        Return-Path: <bounces+29446975-9ed5-timmyg13=gmail.com@em4742.mail.bensbites.co>
        Received: from o1.mail.beehiiv.com (o1.mail.beehiiv.com. [149.72.123.205])
                by mx.google.com with ESMTPS id h10-20020a05620a400a00b0078344e2d733si570647qko.612.2024.01.11.06.03.10
                for <timmyg13@gmail.com>
                (version=TLS1_3 cipher=TLS_AES_128_GCM_SHA256 bits=128/128);
                Thu, 11 Jan 2024 06:03:12 -0800 (PST)
        Received-SPF: pass (google.com: domain of bounces+29446975-9ed5-timmyg13=gmail.com@em4742.mail.bensbites.co designates 149.72.123.205 as permitted sender) client-ip=149.72.123.205;
        Authentication-Results: mx.google.com;
               dkim=pass header.i=@mail.bensbites.co header.s=a8f header.b="lwwkUi/f";
               dkim=pass header.i=@sendgrid.info header.s=smtpapi header.b=YE31SIXW;
               spf=pass (google.com: domain of bounces+29446975-9ed5-timmyg13=gmail.com@em4742.mail.bensbites.co designates 149.72.123.205 as permitted sender) smtp.mailfrom="bounces+29446975-9ed5-timmyg13=gmail.com@em4742.mail.bensbites.co";
               dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=bensbites.co
        DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed; d=mail.bensbites.co; h=content-type:from:mime-version:subject:reply-to:list-unsubscribe: x-feedback-id:to:cc:content-type:from:subject:to; s=a8f; bh=DwFnayV0SLuoG+k6JxMg7AofnbMLupkyfRhuc/Ssl08=; b=lwwkUi/fCxUzkn6TGb/kSU1G88s56eioPHLbKAZp1VEzPDwg4oqjNPdyuQWw9GI7byRc q/FMia4qJw1RqyXw/UuXt09xmgt6gI5IpiZ3COLwe43XFJF0M+EowvXLEY1YbaDXC5UAar QnZuDx02UI5fOccD+4VHj4AtKKn7/y4yUFrrlEcg87pvbeQsNvbii8GJ8bG+p57OnLcEnl 6qqyT2SMbfWhFA4iXsuNQ94NkjSMEvknRD9qYJqPrnsMGlPEXkr4X35+FkEzmX5JuXbEC8 3qB0tDKQraQEHynMqfHagepEuybfuij+se8sVUnY3v1ILuqlGd5LH5E5OTlRkukg==
        DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed; d=sendgrid.info; h=content-type:from:mime-version:subject:reply-to:list-unsubscribe: x-feedback-id:to:cc:content-type:from:subject:to; s=smtpapi; bh=DwFnayV0SLuoG+k6JxMg7AofnbMLupkyfRhuc/Ssl08=; b=YE31SIXWM3hOcHtByw5MuEgU4z6xbhzUPvuQf1J8UVYF/5ieuo7cw5f1EY51r140hHRE s/tSKyMFR1DStTUMvxtp7MPwyjKHZYIgwjwMsa8gMTq3ihYjpQM0v1Zzb9EfTbgCfdWzcm vWJZ9f0V+uy1V6OMMs0/dFb0L3ZTl4/6w=
        Received: by filterdrecv-686bd68bc9-7jkps with SMTP id filterdrecv-686bd68bc9-7jkps-1-659FF502-21
                2024-01-11 14:02:42.267158722 +0000 UTC m=+7413666.073818256
        Received: from Mjk0NDY5NzU (unknown) by geopod-ismtpd-23 (SG) with HTTP id S8QZmNGkSr24-YPshiUQ4w Thu, 11 Jan 2024 14:02:41.943 +0000 (UTC)
        Content-Type: multipart/alternative; boundary=9c64ebd4eab8128392b853d9f3875eb733c6715758190c0dd5a2d2f7cddd
        Date: Thu, 11 Jan 2024 14:03:09 +0000 (UTC)
        From: "Ben's Bites" <bensbites@mail.bensbites.co>
        Mime-Version: 1.0
        Message-ID: <S8QZmNGkSr24-YPshiUQ4w@geopod-ismtpd-23>
        Subject: Daily Digest: Here we go again.
        Reply-To: "Ben's Bites" <ben+reply@bensbites.co>
        x-list-id: 447f6e60-e36a-4642-b6f8-46beb19045ec
        x-newsletter-signup: https://bensbites.beehiiv.com/subscribe
        x-list-owner: <mailto:ben+reply@bensbites.co>
        Feedback-ID: 0326a84b-b832-4aa6-b8fa-e8683f9167bf:newsletter:447f6e60-e36a-4642-b6f8-46beb19045ec:f420f1251b0ecd4
        List-Unsubscribe: <mailto:447f6e60-e36a-4642-b6f8-46beb19045ec+91ad52e5-ad1a-41df-b2c7-0d84a288379a+0326a84b-b832-4aa6-b8fa-e8683f9167bf@unsub.beehiiv.com>, <https://bensbites.beehiiv.com/subscribe/91ad52e5-ad1a-41df-b2c7-0d84a288379a/manage?post_id=0326a84b-b832-4aa6-b8fa-e8683f9167bf>
        sId: 447f6e60-e36a-4642-b6f8-46beb19045ec
        x-beehiiv-type: newsletter
        x-beehiiv-ids: {"account_name":"https://bensbites.beehiiv.com/","campaign_id":"0326a84b-b832-4aa6-b8fa-e8683f9167bf","category":"newsletter","email_generated_at":1704981761,"user_id":"447f6e60-e36a-4642-b6f8-46beb19045ec"}
        x-newsletter-id: https://bensbites.beehiiv.com/
        x-newsletter: https://bensbites.beehiiv.com/p/daily-digest-go
        X-Feedback-ID: 29446975:SG
        X-SG-EID: BTHnhvGa77fVeJNnix9EwobssEN+b6sKch0WhvWd6gY+eYDmBiCq9HhKr4ihBh/sRRK83JHSVd+OmbmhsfNX2mC0LqunUpPv4Yua0FAc+G5fmuof2vApTejUVS4ZgT0i5LFp/3rH1YAXW+IJITPOgIGNwJ2AsWizgCHta0oc5+CECPtTsr/eWwrebcKNoVJVMzNSmc066OBJ4c9+UfaRDkCR8n67F6c+tuFadWCCiaX2fejPC19cc+5cpHvey4pi
        X-SG-ID: N2C25iY2uzGMFz6rgvQsb8raWjw0ZPf1VmjsCkspi/LxVM69ceEc1HIRn6NgiBp73sxRvLgyzvsMfhircSHWCIciaswsXRYZzbaajxqpOWq+9BmYl/FhY+6+AeboWIbrw+uPT1wWxmo2WAfYOfOGZtCkjS0cPSx7er/lrDHSeLijOzQY/Xu5DX04SYFXn5yGAxPQd2PNMVR+IMYFq/eFf0A1M+6Gy6uBCdLXEl562fnxe6zVD/kiVXCoBWGfVfZVn7fEhNdWDGaAb3qjGxILig==
        To: "timmyg13@gmail.com" <timmyg13@gmail.com>
        X-Entity-ID: ymHpjDzzNdd0vAo4owR6wQ==
        
        --9c64ebd4eab8128392b853d9f3875eb733c6715758190c0dd5a2d2f7cddd
        Content-Transfer-Encoding: quoted-printable
        Content-Type: text/plain; charset=utf-8
        Mime-Version: 1.0
        
        [Sign up](https://www.bensbites.co/) | [Advertise](https://sponsor.bensbite=
        s.co/) | [Ben=E2=80=99s Bites News](https://news.bensbites.co/)
        Daily Digest #323
        
        =E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=
        =80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=
        =94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=
        =E2=80=94=E2=80=94
        
        ----------
        Hello folks, here=E2=80=99s what we have today;
        
        ###### **PICKS**
        
        1. I=E2=80=99m writing a series exploring **[AI=E2=80=99s impact on specifi=
        c jobs.](https://bensbites.beehiiv.com/p/ais-impact-jobs-look-frontend-engi=
        neering)** Today I=E2=80=99m breaking down what AI is changing for front-en=
        d engineers and how these lessons apply to other roles.
        
        2. [OpenAI=E2=80=99s GPT store is finally live.](https://openai.com/blog/in=
        troducing-the-gpt-store) We all knew that was coming. But what=E2=80=99s Op=
        enAI without surprise releases? We now have a [ChatGPT for teams](https://o=
        penai.com/blog/introducing-chatgpt-team) plan at **$30/month/user** ($25 if=
         annual). GPTs are getting **more personalized** too. (Not out to everyone =
        yet but hopefully soon!)=F0=9F=8D=BF[Our Summary](https://bensbites.beehiiv=
        .com/p/ai-app-store) (also below)
        
        3. [Alexa gets AI skills: ](https://techcrunch.com/2024/01/09/amazons-alexa=
        -gets-new-generative-ai-powered-experiences/)[characters, music and 20-ques=
        tions](https://techcrunch.com/2024/01/09/amazons-alexa-gets-new-generative-=
        ai-powered-experiences/). Amazon announced new generative AI capabilities f=
        or Alexa at CES 2023. Three developers - **Character.AI, Splash, and Volley=
        ** - introduced Alexa skills powered by LLMs.=F0=9F=8D=BF[Our Summary](http=
        s://bensbites.beehiiv.com/p/alexa-gets-ai-skills-characters-music-20questio=
        ns)
        
        4. [Sam Altman and Bill Gates](https://open.spotify.com/episode/7IHruH31IYa=
        2Tatu5zQr5R?si=3DpKBeMPEOQLaiFTeX_4oLRw&nd=3D1&dlsi=3D2c40e0ab234448d5) cha=
        t about AI, atomic energy and other things.
        
        
        ----------=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=
        =E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=
        =80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=
        =94=E2=80=94=E2=80=94=E2=80=94
        
        ----------
        ###### **TOP TOOLS**
        
        * [Corgea](https://corgea.com/) - Fix **vulnerable code** automatically.
        
        * [Mercor](https://mercor.com/blog/1/) - Redefining **hiring** with AI.
        
        * [MoAIjobs](https://www.moaijobs.com/) -** Find a job** in AI.
        
        * [Pretend](https://pretendapp.com/) - iOS app to** swap your face** with A=
        I.
        
        * [Clarity State](https://www.claritystate.co/) - Catch issues and blindspo=
        ts in your **data arguments.**
        
        **Tools for GPTs:**
        
        * [lil GPTs](https://lilgpts.com/) -** Tiny GPTs,** for not so tiny tasks.
        
        * [ChatCollect](https://chatcollect.com/) - **Collect emails** from your GP=
        T users.
        
        * [GPT Auth](https://gpt-auth.com/) - **Authentication** and analytics for =
        GPTs.
        
        * **[Free link shortener](https://dub.co/tools/chatgpt-link-shortener)** fo=
        r your Custom GPTs.
        
        **Few quirky/unique GPTs:**
        
        * [Hogwarts Sorting Hat](https://chat.openai.com/g/g-jOEvHOkVq-hogwarts-sor=
        ting-hat) - **Where do you belong?** Your face and your mind tell it all.
        
        * [Gift Whisperer](https://chat.openai.com/g/g-I4GTEl2XO-gift-whisperer) - =
        Share IG grid screenshot, get **gift ideas.**
        
        * [CrewAI assistant](https://chat.openai.com/g/g-qqTuUWsBY-crewai-assistant=
        ) - GPT to get started with **building agents** using CrewAI.
        
        [View more =E2=86=92](https://news.bensbites.co/tags/show)
        
        
        ----------=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=
        =E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=
        =80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=
        =94=E2=80=94=E2=80=94=E2=80=94
        
        ----------
        ###### **NEWS**
        
        **Startups and incumbents:**
        
        * **[Leap AI raises $1.4M](https://blog.tryleap.ai/announcing-our-fundraise=
        -to-help-teams-build-no-code-ai-workflows/)**** **round led by Founders Inc=
        .
        
        * **[Photoroom AI is raising $50-60M](https://techcrunch.com/2024/01/09/sou=
        rces-photoroom-the-ai-photo-editing-app-is-raising-50m-60m-at-a-500m-600m-v=
        aluation/)**** **at a $500-600M valuation.
        
        * 12 startups battling for** ****[a slice of Nvidia=E2=80=99s pie.](https:/=
        /www.theinformation.com/articles/the-twelve-startups-battling-for-a-slice-o=
        f-nvidias-pie?rc=3Dbdorru)**
        
        * **[Steam allows AI](https://steamcommunity.com/groups/steamworks/announce=
        ments/detail/3862463747997849619)**** **content in games with disclosures.
        
        * **[Walmart adds Gen AI](https://www.reuters.com/technology/walmart-unveil=
        s-new-genai-search-tech-shoppers-ces-2024-01-10/)**** **search to its iOS a=
        pp.
        
        * **[Not even Notepad is safe](https://www.theverge.com/2024/1/9/24032117/m=
        icrosoft-windows-notepad-generative-ai-option)**** **from Microsoft=E2=80=
        =99s big AI push in Windows.
        
        **The outside world:**
        
        * London and Wales **[judges can use AI](https://apnews.com/article/artific=
        ial-intelligence-ai-guidance-england-wales-judges-c2ab374237a563d3e4bbbb568=
        76955f7)**** **but have to be responsible for what it writes.
        
        * State employees in **[Pennsylvania government](https://gizmodo.com/pennsy=
        lvaniagpt-chatgpt-open-ai-governor-shapiro-1851153510)** will use ChatGPT e=
        nterprise.
        
        * Chinese companies are modding Nvidia=E2=80=99s **[gaming chips for AI.](h=
        ttps://www.ft.com/content/eeea7c4d-71f0-454f-bd16-b2445cb3bbb0)**
        
        * SAG-AFTRA signs a deal with Replica Studio regarding using **[AI replicas=
         of voice actors](https://variety.com/2024/biz/news/sag-aftra-ai-voiceover-=
        studio-video-games-1235866313/)**** **in video games.
        
        * Sal Khan on the **[future of K-12 education.](https://podcasts.apple.com/=
        gb/podcast/sal-khan-on-the-future-of-k-12-education/id1677184070?i=3D100064=
        1143061)**
        
        **Research and tutorials:**
        
        * **[MagicVideo V2 by Bytedance](https://magicvideov2.github.io/)** - Multi=
        -stage, high aesthetic video generation.
        
        * Deepseek announced a **[16B mixture of experts](https://huggingface.co/de=
        epseek-ai/deepseek-moe-16b-base)** model.
        
        * **[Build LLM apps with Langchain](https://www.deeplearning.ai/short-cours=
        es/build-llm-apps-with-langchain-js/)**** **- 1 hour course.
        
        * **[Live building an app](https://www.youtube.com/watch?v=3Doy7uMpPrGMA)**=
         with ChatGPT during a podcast.
        
        * A mere mortal's visual guide to AI **[vector embeddings.](https://agent.a=
        i/p/guide-vector-embeddings)**
        
        * Notebooks and tutorials to **[fine-tune Phi-2](https://www.youtube.com/wa=
        tch?v=3Dt55XrJddjLA)**** **by Brev Dev.
        
        * Install **[Stable Diffusion XL locally on MacOS](https://www.ded.ai/p/sdx=
        l)** and use it for free.
        
        [View more =E2=86=92](https://news.bensbites.co/tags/news/trending)
        
        
        ----------=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=
        =E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=
        =80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=
        =94=E2=80=94=E2=80=94=E2=80=94
        
        ----------
        ###### **QUICK BITES**
        
        OpenAI has launched the [GPT Store](https://openai.com/blog/introducing-the=
        -gpt-store) and [ChatGPT Team](https://openai.com/blog/introducing-chatgpt-=
        team) plan to expand access to large language models for creators and busin=
        esses.
        
        **What is going on here?**
        
        OpenAI has launched the GPT store and a new Teams plan for ChatGPT subscrip=
        tions.
        
        View image: (https://media.beehiiv.com/cdn-cgi/image/fit=3Dscale-down,forma=
        t=3Dauto,onerror=3Dredirect,quality=3D80/uploads/asset/file/e2cc4de3-8390-4=
        f08-a658-1da6505b6ab4/image.png?t=3D1704970503)
        Caption:=20
        
        **What does this mean?**
        
        Reminder: 2 months back OpenAI launched custom chatbots inside ChatGPT, cal=
        ling them GPTs. These GPTs can be shared publicly or have restricted access=
        .=20
        
        With the new GPT store, you can find all public GPTs in a single place. Ope=
        nAI will highlight trending GPTs and top GPTs for several categories every =
        week. The big deal about the GPT Store is the promised revenue share progra=
        m but we gotta wait for more info on that (not too much, OpenAI says rollou=
        t in Q1 2024).
        
        ChatGPT Team is the new plan on ChatGPT for shared workspaces where you can=
         share chats, private GPTs and a dashboard to manage it all. It is pricier:=
         $25/user/month if billed annually ($30 if monthly). You get more messages =
        with GPT-4, longer context lengths and training on your data is default OFF=
        . (a note: you can disable it on simple ChatGPT Plus too, it=E2=80=99s just=
         on by default there)
        
        **Why should I care?**
        
        Repeating Sam=E2=80=99s statement from Dev Day: GPTs are the first step to =
        agents or assistants that will do everything for you. And in that case, cha=
        t does feel like the universal interface for interacting with agents. I fin=
        d optimism in believing that this is an app store moment (and not the end o=
        f work =F0=9F=98=85) and even if it is we have a transition stage to cross.=
         Also, more improvements in GPTs about learning continuously, and getting m=
        ore personalized are [also underway.](https://twitter.com/gdb/status/174512=
        4363362578527) So, get building.
        
        [_Share this story_](https://bensbites.beehiiv.com/p/ai-app-store)
        
        
        ----------=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=
        =E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=
        =80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=
        =94=E2=80=94=E2=80=94=E2=80=94
        
        ----------
        ### Ben=E2=80=99s Bites Insights
        
        We have 2 databases that are updated daily which you can access by sharing =
        Ben=E2=80=99s Bites using the link below;
        
        * **All 10k+ links** we=E2=80=99ve covered, easily filterable (1 referral)
        
        * **6k+ AI company funding rounds** from Jan 2022, including investors, amo=
        unts, stage etc (3 referrals)
        
        =E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=
        =80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=
        =94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=
        =E2=80=94=E2=80=94
        
        Share Ben's Bites
        
        You currently have <strong>1</strong> referral, only <strong>2</strong> awa=
        y from receiving <strong>AI Funding Rounds</strong>.
        
        Or copy and paste this link to others: https://bensbites.beehiiv.com/subscr=
        ibe?ref=3DNE6k4RTSy3
        
        =E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=
        =80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=
        =94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=E2=80=94=
        =E2=80=94=E2=80=94
        
        ----------
        
        
        =E2=80=94=E2=80=94=E2=80=94
        
        You are reading a plain text version of this post. For the best experience,=
         copy and paste this link in your browser to view the post online:
        https://bensbites.beehiiv.com/p/daily-digest-go
        
        --9c64ebd4eab8128392b853d9f3875eb733c6715758190c0dd5a2d2f7cddd
        Content-Transfer-Encoding: quoted-printable
        Content-Type: text/html; charset=utf-8
        Mime-Version: 1.0
        
        <!DOCTYPE html><html lang=3D"en" xmlns=3D"http://www.w3.org/1999/xhtml" xml=
        ns:v=3D"urn:schemas-microsoft-com:vml" xmlns:o=3D"urn:schemas-microsoft-com=
        :office:office" style=3D"font-size:16px;"><head><meta charset=3D"utf-8"/><!=
        --[if !mso]><!--><meta http-equiv=3D"X-UA-Compatible" content=3D"IE=3Dedge"=
        /><!--<![endif]--><meta name=3D"viewport" content=3D"width=3Ddevice-width,i=
        nitial-scale=3D1"/><meta name=3D"x-apple-disable-message-reformatting"/><me=
        ta name=3D"format-detection" content=3D"telephone=3Dno,address=3Dno,email=
        =3Dno,date=3Dno,url=3Dno"/><meta name=3D"color-scheme" content=3D"light"/><=
        meta name=3D"supported-color-schemes" content=3D"light"/><title>Daily Diges=
        t: Here we go again.</title><!--[if mso]><xml><o:OfficeDocumentSettings><o:=
        AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings><=
        /xml><![endif]--><style>
          :root { color-scheme: light; supported-color-schemes: light; }
          body { margin: 0; padding: 0; min-width: 100%!important; -ms-text-size-ad=
        just: 100% !important; -webkit-transform: scale(1) !important; -webkit-text=
        -size-adjust: 100% !important; -webkit-font-smoothing: antialiased !importa=
        nt; }
          .body { word-wrap: normal; word-spacing:normal; }
          table.mso { width: 100%; border-collapse: collapse; padding: 0; table-lay=
        out: fixed; }
          img { border: 0; outline: none; }
          table {  mso-table-lspace: 0px; mso-table-rspace: 0px; }
          td, a, span {  mso-line-height-rule: exactly; }
          #root [x-apple-data-detectors=3Dtrue],
          a[x-apple-data-detectors=3Dtrue],
          #MessageViewBody a { color: inherit !important; text-decoration: inherit =
        !important; font-size: inherit !important; font-family: inherit !important;=
         font-weight: inherit !important; line-height: inherit !important; }
          span.MsoHyperlink { color: inherit !important; mso-style-priority: 99 !im=
        portant; }
          span.MsoHyperlinkFollowed { color: inherit !important; mso-style-priority=
        : 99 !important; }
          .a { background-color:#f1f5f9; }
          .b { background-color:#ffffff; }
          .c  { background-color:#ffffff; }
          .d { background-color:#FFFFFF; }
          .d2 { background-color:#FFFFFF; }
          .d3 { background-color:#FFFFFF; }
          h1 { color:#24292f; }
          h2 { color:#24292f; }
          h3 { color:#24292f; }
          h4 { color:#24292f; }
          h5 { color:#24292f; }
          h6 { color:#24292f; }
          h1 a { text-decoration:underline;color:#24292f !important; }
          h2 a { text-decoration:underline;color:#24292f !important; }
          h3 a { text-decoration:underline;color:#24292f !important; }
          h4 a { text-decoration:underline;color:#24292f !important; }
          h5 a { text-decoration:underline;color:#24292f !important; }
          h6 a { text-decoration:underline;color:#24292f !important; }
          h1, h1 a, h2, h2 a, h3, h3 a, h4, h4 a, h5, h5 a, h6, h6 a, ul, li, ol, p=
        , p a { margin: 0;padding: 0; }
          h1 { font-family:'Roboto',-apple-system,BlinkMacSystemFont,Tahoma,sans-se=
        rif;font-weight:Bold;font-size:26px;line-height:39px;padding-bottom:10px;pa=
        dding-top:16px;mso-margin-top-alt:16px;mso-margin-bottom-alt:10px }
          h2 { font-family:'Roboto',-apple-system,BlinkMacSystemFont,Tahoma,sans-se=
        rif;font-weight:Bold;font-size:24px;line-height:36px;padding-bottom:1px;pad=
        ding-top:14px;mso-margin-top-alt:14px;mso-margin-bottom-alt:1px }
          h3 { font-family:'Roboto',-apple-system,BlinkMacSystemFont,Tahoma,sans-se=
        rif;font-weight:Bold;font-size:20px;line-height:30px;padding-bottom:1px;pad=
        ding-top:10px;mso-margin-top-alt:10px;mso-margin-bottom-alt:1px }
          h4 { font-family:'Roboto',-apple-system,BlinkMacSystemFont,Tahoma,sans-se=
        rif;font-weight:Bold;font-size:18px;line-height:27px;padding-bottom:1px;pad=
        ding-top:10px;mso-margin-top-alt:10px;mso-margin-bottom-alt:1px }
          h5 { font-family:'Roboto',-apple-system,BlinkMacSystemFont,Tahoma,sans-se=
        rif;font-weight:Bold;font-size:16px;line-height:24px;padding-bottom:1px;pad=
        ding-top:10px;mso-margin-top-alt:10px;mso-margin-bottom-alt:1px }
          h6 { font-family:'Roboto',-apple-system,BlinkMacSystemFont,Tahoma,sans-se=
        rif;font-weight:Normal;font-size:14px;line-height:21px;padding-bottom:8px;p=
        adding-top:6px;mso-margin-top-alt:6px;mso-margin-bottom-alt:8px }
          p { font-family:'Roboto',-apple-system,BlinkMacSystemFont,Tahoma,sans-ser=
        if;color:#24292f;font-size:18px;line-height:27px;padding-bottom:15px;paddin=
        g-top:10px;mso-margin-top-alt:10px;mso-margin-bottom-alt:15px; }
          p a, .e a, ul a, li a  { word-break:break-word;color:#1177eb !important;t=
        ext-decoration:underline;text-decoration-color:#1177eb; }
          p .bold { font-weight:bold;color:#24292f; }
          p span[style*=3D"font-size"] { line-height: 1.6; }
          .f p { font-size:12px;line-height:15px;color:#24292f;padding:0; }
          .f p a { text-decoration:underline;color:#24292f !important; }
          .g p { font-family:'Helvetica',Arial,sans-serif;font-size:14px;line-heigh=
        t:20px;font-weight:normal;margin:0; }
          .g p a  { text-decoration: underline; }
          .i p { font-family:'Helvetica',Arial,sans-serif;line-height:27px;font-siz=
        e:18px;color:#222222; }
          .i p a { text-decoration:underline;color:#222222 !important; }
          .i2 p { font-family:'Roboto',-apple-system,BlinkMacSystemFont,Tahoma,sans=
        -serif;line-height:32px;font-size:18px;color:#2D2D2D; }
          .i2 p a { text-decoration:underline;color:#2D2D2D !important; }
          .i3 p { font-family:'Helvetica',Arial,sans-serif;line-height:33px;font-si=
        ze:22px;color:#2D2D2D; }
          .i3 p a { text-decoration:underline;color:#2D2D2D !important; }
          .h p a { text-decoration:underline;color:#595959 !important; }
          .h2 p a { text-decoration:underline;color:#595959 !important; }
          .h3 p a { text-decoration:underline;color:#595959 !important; }
          .j { border-top:12px solid #f1f5f9; }
          .k p { padding-left:15px;padding-bottom:0px;padding-top:6px;mso-margin-to=
        p-alt:6px;mso-margin-bottom-alt:0px;mso-margin-left-alt:15px; }
          .o { background-color:#FFFFFF;border:1px solid #F1F1F1;border-radius:6px;=
         }
          .o p { font-family:'Helvetica',Arial,sans-serif;padding:0px;margin:0px; }
          .l p,
          .l p a { font-size:14px;line-height:20px;font-weight: bold;color:#2D2D2D;=
        padding-bottom:6px;mso-margin-bottom-alt:6px;text-decoration:none; }
          .m p,
          .m p a { font-size:13px;line-height:18px;font-weight:400;color:#2D2D2D;pa=
        dding-bottom:6px;mso-margin-bottom-alt:6px;text-decoration:none; }
          .n p,
          .n p a { font-size:12px;line-height:17px;font-weight:400;color:#2D2D2D;pa=
        dding-bottom:6px;mso-margin-bottom-alt:6px;text-decoration:none; }
          .p { background-color:#FFFFFF;max-width:520px;border:1px solid #E1E8ED;bo=
        rder:1px solid rgba(80, 80, 80, 0.3);border-radius:5px; }
          .q { font-size:16px;font-family:Helvetica,Roboto,Calibri,sans-serif !impo=
        rtant;border:1px solid #e1e8ed;border:1px solid rgba(80, 80, 80, 0.3);borde=
        r-radius:5px;background-color:#FFFFFF; }
          .q p { font-size:16px;font-family:Helvetica,Roboto,Calibri,sans-serif !im=
        portant;color:#222222; }
          .r { border:1px solid #E1E8ED !important;border-radius:5px; }
          .s p { font-size: 14px; line-height: 17px; font-weight: 400; color: #6978=
        82; text-decoration: none; }
          .t p { font-family:'Helvetica',Arial,sans-serif;font-size:12px;line-heigh=
        t:18px;font-weight:400;color:#222222;font-style:italic;padding:4px 0px 0px;=
        }
          .v { border-radius:6px;border:solid 0px #1177eb;background-color:#24292f;=
        font-family:'Roboto',-apple-system,BlinkMacSystemFont,Tahoma,sans-serif;col=
        or:#FFFFFF; }
          .v a { text-decoration:none;display:block;color:#FFFFFF; }
          .w p { font-size:12px;line-height:15px;font-weight:400;color:#24292f; }
          .w p a { text-decoration: underline !important;color:#24292f !important; =
        }
          ul { font-family:'Roboto',-apple-system,BlinkMacSystemFont,Tahoma,sans-se=
        rif;margin:0px 0px 0px 25px !important;padding:0px !important;color:#24292f=
        ;line-height:27px;list-style:disc;font-size:18px; }
          ul li { font-family:'Roboto',-apple-system,BlinkMacSystemFont,Tahoma,sans=
        -serif;margin:12px 0px 0px 0px !important;padding: 0px 0px 0px 0px !importa=
        nt; color: #24292f; list-style:disc; }
          ol { font-family:'Roboto',-apple-system,BlinkMacSystemFont,Tahoma,sans-se=
        rif;margin: 0px 0px 0px 25px !important;padding:0px !important;color:#24292=
        f;line-height:27px;list-style:decimal;font-size:18px; }
          ol li { font-family:'Roboto',-apple-system,BlinkMacSystemFont,Tahoma,sans=
        -serif;margin:12px 0px 0px 0px !important;padding: 0px 0px 0px 0px !importa=
        nt; color: #24292f; list-style:decimal; }
          .e h3,
          .e p,
          .e span { padding-bottom:0px;padding-top:0px;mso-margin-top-alt:0px;mso-m=
        argin-bottom-alt:0px; }
          .e span,
          .e li { font-family:'Roboto',-apple-system,BlinkMacSystemFont,Tahoma,sans=
        -serif;font-size:18px;color:#24292f;line-height:27px; }
          .rec { font-family:  ui-sans-serif, system-ui, -apple-system, BlinkMacSys=
        temFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-ser=
        if, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color E=
        moji" !important; }
          .rec__button:hover { background-color: #f9fafb !important; }
          .copyright a {color: inherit !important; text-decoration: none !important=
        ; font-size: inherit !important; font-family: inherit !important; font-weig=
        ht: inherit !important; line-height: inherit !important;}
          .txt_social p { padding: 0; }
          @media only screen and (max-width:667px) {
            .aa { width: 100% !important; }
            .bb img { width: 100% !important; height: auto !important; max-width: n=
        one !important; }
            .cc { padding: 0px 8px !important; }
            .ee { padding-top:10px !important;padding-bottom:10px !important; }
            .ff ul, .ff ol { margin: 0px 0px 0px 10px !important;padding: 0px !impo=
        rtant; }
            .ff li { margin:12px 0px 0px 10px !important; }
            .r {height:140px !important;}
            .s p { font-size:13px !important;line-height:15px !important; }
            .mob-hide {display:none !important;}
            .mob-stack {display:block !important;width:100% !important;}
            .mob-block {display:block !important;}
            .embed-img {padding:0px 0px 12px 0px !important;}
            .socialShare {padding-top:15px !important;}
            .rec { padding-left:15px!important;padding-right:15px!important; }
            .bodyWrapper { padding:10px 4px 10px 4px !important; }
          }
          @media screen and (max-width: 480px) {
            u + .a .gg { width: 100% !important; width: 100vw !important; }
            .tok-heart { padding-top:75% !important; }
            .tok-play { padding-top: 250px !important; }
          }
          @media screen and (max-width: 320px) {
            .tok-heart { padding-top:65% !important; }
          }
          .u { border: 1px solid #CACACA !important; border-radius: 2px !important;=
         background-color: #ffffff !important; padding: 0px 13px 0px 13px !importan=
        t; font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Se=
        goe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif !important;fon=
        t-size: 12px !important; color: #767676 !important; }
          .u a { text-decoration: none; display: block !important; color: #767676 !=
        important; margin: 0px !important; }
          .u span, .u img { color: #767676 !important;margin:0px !important; max-he=
        ight:32px !important;background-color:#ffffff !important; }
        </style><!--[if mso]><style type=3D"text/css">
            sup { font-size: 100% !important;vertical-align: .5em !important;mso-te=
        xt-raise: -1.5% !important;line-height: 0 !important; }
            ul { margin-left:0px !important; margin-right:10px !important; margin-t=
        op:20px !important; margin-bottom:20px !important; }
            ul li { margin-left: 0px !important; mso-special-format: decimal; }
            ol { margin-left:0px !important; margin-right:10px !important; margin-t=
        op:20px !important; margin-bottom:20px !important; }
            ol li { margin-left: 0px !important; mso-special-format: decimal; }
            li.listItem { margin-left:15px !important; margin-top:0px !important; }
            .paddingDesktop { padding: 10px 0 !important; }
            .edm_outlooklist { margin-left: -20px !important; }
            .embedImage { display:none !important; }
          </style><![endif]--><style>
          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            src: url('https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu4mxKKT=
        U1Kg.woff2') format('woff2');
          }
          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            src: url('https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlfBB=
        c4AMP6lQ.woff2') format('woff2');
          }
          @font-face {
            font-family: 'Roboto';
            font-style: italic;
            font-weight: 400;
            src: url('https://fonts.gstatic.com/s/roboto/v29/KFOkCnqEu92Fr1Mu51xIIz=
        IXKMny.woff2') format('woff2');
          }
          @font-face {
            font-family: 'Roboto';
            font-style: italic;
            font-weight: 700;
            src: url('https://fonts.gstatic.com/s/roboto/v29/KFOjCnqEu92Fr1Mu51TzBi=
        c6CsTYl4BO.woff2') format('woff2');
          }
        </style></head><head><meta charset=3D"utf-8"/><!--[if !mso]><!--><meta http=
        -equiv=3D"X-UA-Compatible" content=3D"IE=3Dedge"/><!--<![endif]--><meta nam=
        e=3D"viewport" content=3D"width=3Ddevice-width,initial-scale=3D1"/><meta na=
        me=3D"x-apple-disable-message-reformatting"/><meta name=3D"format-detection=
        " content=3D"telephone=3Dno,address=3Dno,email=3Dno,date=3Dno,url=3Dno"/><m=
        eta name=3D"color-scheme" content=3D"light"/><meta name=3D"supported-color-=
        schemes" content=3D"light"/><title>Daily Digest: Here we go again.</title><=
        !--[if mso]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96=
        </o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]--><style>
          :root { color-scheme: light; supported-color-schemes: light; }
          body { margin: 0; padding: 0; min-width: 100%!important; -ms-text-size-ad=
        just: 100% !important; -webkit-transform: scale(1) !important; -webkit-text=
        -size-adjust: 100% !important; -webkit-font-smoothing: antialiased !importa=
        nt; }
          .body { word-wrap: normal; word-spacing:normal; }
          table.mso { width: 100%; border-collapse: collapse; padding: 0; table-lay=
        out: fixed; }
          img { border: 0; outline: none; }
          table {  mso-table-lspace: 0px; mso-table-rspace: 0px; }
          td, a, span {  mso-line-height-rule: exactly; }
          #root [x-apple-data-detectors=3Dtrue],
          a[x-apple-data-detectors=3Dtrue],
          #MessageViewBody a { color: inherit !important; text-decoration: inherit =
        !important; font-size: inherit !important; font-family: inherit !important;=
         font-weight: inherit !important; line-height: inherit !important; }
          span.MsoHyperlink { color: inherit !important; mso-style-priority: 99 !im=
        portant; }
          span.MsoHyperlinkFollowed { color: inherit !important; mso-style-priority=
        : 99 !important; }
          .a { background-color:#f1f5f9; }
          .b { background-color:#ffffff; }
          .c  { background-color:#ffffff; }
          .d { background-color:#FFFFFF; }
          .d2 { background-color:#FFFFFF; }
          .d3 { background-color:#FFFFFF; }
          h1 { color:#24292f; }
          h2 { color:#24292f; }
          h3 { color:#24292f; }
          h4 { color:#24292f; }
          h5 { color:#24292f; }
          h6 { color:#24292f; }
          h1 a { text-decoration:underline;color:#24292f !important; }
          h2 a { text-decoration:underline;color:#24292f !important; }
          h3 a { text-decoration:underline;color:#24292f !important; }
          h4 a { text-decoration:underline;color:#24292f !important; }
          h5 a { text-decoration:underline;color:#24292f !important; }
          h6 a { text-decoration:underline;color:#24292f !important; }
          h1, h1 a, h2, h2 a, h3, h3 a, h4, h4 a, h5, h5 a, h6, h6 a, ul, li, ol, p=
        , p a { margin: 0;padding: 0; }
          h1 { font-family:'Roboto',-apple-system,BlinkMacSystemFont,Tahoma,sans-se=
        rif;font-weight:Bold;font-size:26px;line-height:39px;padding-bottom:10px;pa=
        dding-top:16px;mso-margin-top-alt:16px;mso-margin-bottom-alt:10px }
          h2 { font-family:'Roboto',-apple-system,BlinkMacSystemFont,Tahoma,sans-se=
        rif;font-weight:Bold;font-size:24px;line-height:36px;padding-bottom:1px;pad=
        ding-top:14px;mso-margin-top-alt:14px;mso-margin-bottom-alt:1px }
          h3 { font-family:'Roboto',-apple-system,BlinkMacSystemFont,Tahoma,sans-se=
        rif;font-weight:Bold;font-size:20px;line-height:30px;padding-bottom:1px;pad=
        ding-top:10px;mso-margin-top-alt:10px;mso-margin-bottom-alt:1px }
          h4 { font-family:'Roboto',-apple-system,BlinkMacSystemFont,Tahoma,sans-se=
        rif;font-weight:Bold;font-size:18px;line-height:27px;padding-bottom:1px;pad=
        ding-top:10px;mso-margin-top-alt:10px;mso-margin-bottom-alt:1px }
          h5 { font-family:'Roboto',-apple-system,BlinkMacSystemFont,Tahoma,sans-se=
        rif;font-weight:Bold;font-size:16px;line-height:24px;padding-bottom:1px;pad=
        ding-top:10px;mso-margin-top-alt:10px;mso-margin-bottom-alt:1px }
          h6 { font-family:'Roboto',-apple-system,BlinkMacSystemFont,Tahoma,sans-se=
        rif;font-weight:Normal;font-size:14px;line-height:21px;padding-bottom:8px;p=
        adding-top:6px;mso-margin-top-alt:6px;mso-margin-bottom-alt:8px }
          p { font-family:'Roboto',-apple-system,BlinkMacSystemFont,Tahoma,sans-ser=
        if;color:#24292f;font-size:18px;line-height:27px;padding-bottom:15px;paddin=
        g-top:10px;mso-margin-top-alt:10px;mso-margin-bottom-alt:15px; }
          p a, .e a, ul a, li a  { word-break:break-word;color:#1177eb !important;t=
        ext-decoration:underline;text-decoration-color:#1177eb; }
          p .bold { font-weight:bold;color:#24292f; }
          p span[style*=3D"font-size"] { line-height: 1.6; }
          .f p { font-size:12px;line-height:15px;color:#24292f;padding:0; }
          .f p a { text-decoration:underline;color:#24292f !important; }
          .g p { font-family:'Helvetica',Arial,sans-serif;font-size:14px;line-heigh=
        t:20px;font-weight:normal;margin:0; }
          .g p a  { text-decoration: underline; }
          .i p { font-family:'Helvetica',Arial,sans-serif;line-height:27px;font-siz=
        e:18px;color:#222222; }
          .i p a { text-decoration:underline;color:#222222 !important; }
          .i2 p { font-family:'Roboto',-apple-system,BlinkMacSystemFont,Tahoma,sans=
        -serif;line-height:32px;font-size:18px;color:#2D2D2D; }
          .i2 p a { text-decoration:underline;color:#2D2D2D !important; }
          .i3 p { font-family:'Helvetica',Arial,sans-serif;line-height:33px;font-si=
        ze:22px;color:#2D2D2D; }
          .i3 p a { text-decoration:underline;color:#2D2D2D !important; }
          .h p a { text-decoration:underline;color:#595959 !important; }
          .h2 p a { text-decoration:underline;color:#595959 !important; }
          .h3 p a { text-decoration:underline;color:#595959 !important; }
          .j { border-top:12px solid #f1f5f9; }
          .k p { padding-left:15px;padding-bottom:0px;padding-top:6px;mso-margin-to=
        p-alt:6px;mso-margin-bottom-alt:0px;mso-margin-left-alt:15px; }
          .o { background-color:#FFFFFF;border:1px solid #F1F1F1;border-radius:6px;=
         }
          .o p { font-family:'Helvetica',Arial,sans-serif;padding:0px;margin:0px; }
          .l p,
          .l p a { font-size:14px;line-height:20px;font-weight: bold;color:#2D2D2D;=
        padding-bottom:6px;mso-margin-bottom-alt:6px;text-decoration:none; }
          .m p,
          .m p a { font-size:13px;line-height:18px;font-weight:400;color:#2D2D2D;pa=
        dding-bottom:6px;mso-margin-bottom-alt:6px;text-decoration:none; }
          .n p,
          .n p a { font-size:12px;line-height:17px;font-weight:400;color:#2D2D2D;pa=
        dding-bottom:6px;mso-margin-bottom-alt:6px;text-decoration:none; }
          .p { background-color:#FFFFFF;max-width:520px;border:1px solid #E1E8ED;bo=
        rder:1px solid rgba(80, 80, 80, 0.3);border-radius:5px; }
          .q { font-size:16px;font-family:Helvetica,Roboto,Calibri,sans-serif !impo=
        rtant;border:1px solid #e1e8ed;border:1px solid rgba(80, 80, 80, 0.3);borde=
        r-radius:5px;background-color:#FFFFFF; }
          .q p { font-size:16px;font-family:Helvetica,Roboto,Calibri,sans-serif !im=
        portant;color:#222222; }
          .r { border:1px solid #E1E8ED !important;border-radius:5px; }
          .s p { font-size: 14px; line-height: 17px; font-weight: 400; color: #6978=
        82; text-decoration: none; }
          .t p { font-family:'Helvetica',Arial,sans-serif;font-size:12px;line-heigh=
        t:18px;font-weight:400;color:#222222;font-style:italic;padding:4px 0px 0px;=
        }
          .v { border-radius:6px;border:solid 0px #1177eb;background-color:#24292f;=
        font-family:'Roboto',-apple-system,BlinkMacSystemFont,Tahoma,sans-serif;col=
        or:#FFFFFF; }
          .v a { text-decoration:none;display:block;color:#FFFFFF; }
          .w p { font-size:12px;line-height:15px;font-weight:400;color:#24292f; }
          .w p a { text-decoration: underline !important;color:#24292f !important; =
        }
          ul { font-family:'Roboto',-apple-system,BlinkMacSystemFont,Tahoma,sans-se=
        rif;margin:0px 0px 0px 25px !important;padding:0px !important;color:#24292f=
        ;line-height:27px;list-style:disc;font-size:18px; }
          ul li { font-family:'Roboto',-apple-system,BlinkMacSystemFont,Tahoma,sans=
        -serif;margin:12px 0px 0px 0px !important;padding: 0px 0px 0px 0px !importa=
        nt; color: #24292f; list-style:disc; }
          ol { font-family:'Roboto',-apple-system,BlinkMacSystemFont,Tahoma,sans-se=
        rif;margin: 0px 0px 0px 25px !important;padding:0px !important;color:#24292=
        f;line-height:27px;list-style:decimal;font-size:18px; }
          ol li { font-family:'Roboto',-apple-system,BlinkMacSystemFont,Tahoma,sans=
        -serif;margin:12px 0px 0px 0px !important;padding: 0px 0px 0px 0px !importa=
        nt; color: #24292f; list-style:decimal; }
          .e h3,
          .e p,
          .e span { padding-bottom:0px;padding-top:0px;mso-margin-top-alt:0px;mso-m=
        argin-bottom-alt:0px; }
          .e span,
          .e li { font-family:'Roboto',-apple-system,BlinkMacSystemFont,Tahoma,sans=
        -serif;font-size:18px;color:#24292f;line-height:27px; }
          .rec { font-family:  ui-sans-serif, system-ui, -apple-system, BlinkMacSys=
        temFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-ser=
        if, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color E=
        moji" !important; }
          .rec__button:hover { background-color: #f9fafb !important; }
          .copyright a {color: inherit !important; text-decoration: none !important=
        ; font-size: inherit !important; font-family: inherit !important; font-weig=
        ht: inherit !important; line-height: inherit !important;}
          .txt_social p { padding: 0; }
          @media only screen and (max-width:667px) {
            .aa { width: 100% !important; }
            .bb img { width: 100% !important; height: auto !important; max-width: n=
        one !important; }
            .cc { padding: 0px 8px !important; }
            .ee { padding-top:10px !important;padding-bottom:10px !important; }
            .ff ul, .ff ol { margin: 0px 0px 0px 10px !important;padding: 0px !impo=
        rtant; }
            .ff li { margin:12px 0px 0px 10px !important; }
            .r {height:140px !important;}
            .s p { font-size:13px !important;line-height:15px !important; }
            .mob-hide {display:none !important;}
            .mob-stack {display:block !important;width:100% !important;}
            .mob-block {display:block !important;}
            .embed-img {padding:0px 0px 12px 0px !important;}
            .socialShare {padding-top:15px !important;}
            .rec { padding-left:15px!important;padding-right:15px!important; }
            .bodyWrapper { padding:10px 4px 10px 4px !important; }
          }
          @media screen and (max-width: 480px) {
            u + .a .gg { width: 100% !important; width: 100vw !important; }
            .tok-heart { padding-top:75% !important; }
            .tok-play { padding-top: 250px !important; }
          }
          @media screen and (max-width: 320px) {
            .tok-heart { padding-top:65% !important; }
          }
          .u { border: 1px solid #CACACA !important; border-radius: 2px !important;=
         background-color: #ffffff !important; padding: 0px 13px 0px 13px !importan=
        t; font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Se=
        goe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif !important;fon=
        t-size: 12px !important; color: #767676 !important; }
          .u a { text-decoration: none; display: block !important; color: #767676 !=
        important; margin: 0px !important; }
          .u span, .u img { color: #767676 !important;margin:0px !important; max-he=
        ight:32px !important;background-color:#ffffff !important; }
        </style><!--[if mso]><style type=3D"text/css">
            sup { font-size: 100% !important;vertical-align: .5em !important;mso-te=
        xt-raise: -1.5% !important;line-height: 0 !important; }
            ul { margin-left:0px !important; margin-right:10px !important; margin-t=
        op:20px !important; margin-bottom:20px !important; }
            ul li { margin-left: 0px !important; mso-special-format: decimal; }
            ol { margin-left:0px !important; margin-right:10px !important; margin-t=
        op:20px !important; margin-bottom:20px !important; }
            ol li { margin-left: 0px !important; mso-special-format: decimal; }
            li.listItem { margin-left:15px !important; margin-top:0px !important; }
            .paddingDesktop { padding: 10px 0 !important; }
            .edm_outlooklist { margin-left: -20px !important; }
            .embedImage { display:none !important; }
          </style><![endif]--><style>
          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            src: url('https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu4mxKKT=
        U1Kg.woff2') format('woff2');
          }
          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            src: url('https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlfBB=
        c4AMP6lQ.woff2') format('woff2');
          }
          @font-face {
            font-family: 'Roboto';
            font-style: italic;
            font-weight: 400;
            src: url('https://fonts.gstatic.com/s/roboto/v29/KFOkCnqEu92Fr1Mu51xIIz=
        IXKMny.woff2') format('woff2');
          }
          @font-face {
            font-family: 'Roboto';
            font-style: italic;
            font-weight: 700;
            src: url('https://fonts.gstatic.com/s/roboto/v29/KFOjCnqEu92Fr1Mu51TzBi=
        c6CsTYl4BO.woff2') format('woff2');
          }
        </style></head><body class=3D"a" style=3D"margin:0px auto;padding:0px;word-=
        wrap:normal;word-spacing:normal;background-color:#f1f5f9;"><div role=3D"art=
        icle" aria-roledescription=3D"email" aria-label=3D"email_name" lang=3Den st=
        yle=3D"font-size:1rem"><div style=3D"display:none;max-height:0px;overflow:h=
        idden;"> PLUS: AI is changing &#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;=
        &#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#1=
        60;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;=
        &#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#82=
        04;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&=
        #8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#16=
        0;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&=
        #160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#820=
        4;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#=
        8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160=
        ;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#=
        160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204=
        ;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8=
        204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;=
        &#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#1=
        60;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;=
        &#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#82=
        04;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&=
        #8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#16=
        0;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&=
        #160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#820=
        4;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#=
        8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160=
        ;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#=
        160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204=
        ;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8=
        204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;=
        &#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#1=
        60;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;=
        &#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#82=
        04;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&=
        #8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#16=
        0;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&=
        #160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#820=
        4;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#8204;&#160;&#=
        8204; </div><table role=3D"none" width=3D"100%" border=3D"0" cellspacing=3D=
        "0" align=3D"center" cellpadding=3D"0" class=3D"gg"><tr><td align=3D"center=
        " valign=3D"top"><table role=3D"none" width=3D"670" border=3D"0" cellspacin=
        g=3D"0" cellpadding=3D"0" class=3D"aa" style=3D"width:670px;table-layout:fi=
        xed;"><tr><td class=3D"bodyWrapper" align=3D"center" valign=3D"top" style=
        =3D"padding:10px 5px 10px 5px;"><table role=3D"none" width=3D"100%" border=
        =3D"0" cellspacing=3D"0" cellpadding=3D"0" align=3D"center"><tr><td align=
        =3D"center" valign=3D"top" style=3D"border:0px solid #f1f5f9;border-radius:=
        0px;background-color:#ffffff;" class=3D"c"><table role=3D"none" width=3D"10=
        0%" border=3D"0" cellspacing=3D"0" cellpadding=3D"0" align=3D"center"><tr><=
        td class=3D"f" align=3D"right" valign=3D"top" style=3D"padding:20px 25px;">=
        <p> 11 Jan &nbsp; | &nbsp; <a href=3D"https://link.mail.beehiiv.com/ss/c/2m=
        EwMjuR9Ftp1uNMjV2BI_kqa2wExC8tngdDHNC2L8B6FAKbCS3LMU2CyEfwU1XgzBlx8v7UDdJKq=
        g6jA-zpomAB-SzORZLZ0UFuP0JKS9aOKgEp0YhokJGJP1NNnAZ4uNNE22_GyOamFEzaPxVOEH8x=
        jNEVgKmEkGRTxcdJt1vPLxSzAE35awYXeqW3h8dujLTml4adt5tuWR-qay3RKEMuIyzA-tGdQIp=
        4BD9IKidV9pH7h98KwGilE5BT-R19jrbjaTqan2UFSSQ0SFQdjU2_HEf47AQwEr_abr8-tkwKXI=
        gJM3R7S3KNV7a47IN9Frtad1L1-SBmSsPf7Xf0fACadTAH1Hdr7MCCfKmu1a4FmCfowOMoTTVxx=
        dnhRmQAtqBPjra6jb8t1Zz0u93MnFzD9Yjqo7VSg3ltPPlwu0hgM1V-IxD-8xZ7ViYEJa3c_6aV=
        fWnwmIniOpccAvmIZmdthPDymIhKrbVzE6NzcbHHbtrW3PfKnUSMGrLUgIwC1BoEpYdQlwus4FV=
        fLpKX9poObH-tsZePlIelsM0GiOCE2NG8AZZVPw92D37c3o1juO2If8hncOIKV1TEwCjUEZC9Jc=
        k_Gp62XSoXJyNaeV8/42w/m5zulvL-Q6CPvIEVLfb8IQ/h0/zYNhFyG7xWZ61infhGiUrEcG3aL=
        H0u7D9lsaT59pzvs">Read Online</a></p></td></tr><tr><td class=3D"dd" align=
        =3D"center" valign=3D"top" style=3D"width:100%;"><table role=3D"none" borde=
        r=3D"0" cellspacing=3D"0" cellpadding=3D"0" align=3D"center" style=3D"margi=
        n:0 auto 16px;"><tbody><tr><td style=3D"width:152px;"><a href=3D"https://li=
        nk.mail.beehiiv.com/ss/c/5J8WPrGlKFK1BUsRYoWIfYG9jbGqZwQ0tu7u37skSNOfLPFIu4=
        6j7exkEhSNPZoR_6C8CrttJExgoq86jdZE_BgCBF-Hv0XZJ1qYtizB0rj9YJGSci8HpvnvetUnP=
        OBvcOB8IffFPGNRkNeJ4E2DgsFFVyXJOiAa1x4IoKaa0gk/42w/m5zulvL-Q6CPvIEVLfb8IQ/h=
        1/9GmPGhYNYU4L3JvUOoG2WjKZxAA00Ve8OLOSPdWoKqs"><img alt=3D"" width=3D"152" =
        height=3D"auto" border=3D"0" style=3D"width:100%;height:auto;border:0;displ=
        ay:block;outline:none;text-decoration:none;" src=3D"https://media.beehiiv.c=
        om/cdn-cgi/image/fit=3Dscale-down,format=3Dauto,onerror=3Dredirect,quality=
        =3D80/uploads/asset/file/e62f06f0-55c5-486f-9fe2-39c5a9ade56e/Word_mark_tra=
        nsparent_background.png?t=3D1688404513"/></a></td></tr></tbody></table></td=
        ></tr><tr><td style=3D"height:0px;width:0px;"><div style=3D"height:1px;" da=
        ta-open-tracking=3D"true"> <img src=3D"https://link.mail.beehiiv.com/ss/o/I=
        vhdkJ54-7q_Xcisk9TOzg/42w/m5zulvL-Q6CPvIEVLfb8IQ/ho.gif" alt=3D"" width=3D"=
        1" height=3D"1" border=3D"0" style=3D"height:1px !important;width:1px !impo=
        rtant;border-width:0 !important;margin-top:0 !important;margin-bottom:0 !im=
        portant;margin-right:0 !important;margin-left:0 !important;padding-top:0 !i=
        mportant;padding-bottom:0 !important;padding-right:0 !important;padding-lef=
        t:0 !important;"/> </div></td></tr><tr id=3D"content-blocks"><td class=3D"e=
        mail-card-body" align=3D"center" valign=3D"top" style=3D"padding-bottom:25p=
        x;"><table role=3D"none" width=3D"100%" border=3D"0" cellspacing=3D"0" cell=
        padding=3D"0" align=3D"center"><tr><td class=3D"dd" align=3D"left" style=3D=
        "padding:0px 25px;text-align:left;word-break:break-word;"><p><span style=3D=
        "font-size:0.8rem;"><a class=3D"link" href=3D"https://link.mail.beehiiv.com=
        /ss/c/5J8WPrGlKFK1BUsRYoWIfYG9jbGqZwQ0tu7u37skSNOfLPFIu46j7exkEhSNPZoR_6C8C=
        rttJExgoq86jdZE_BgCBF-Hv0XZJ1qYtizB0rj9YJGSci8HpvnvetUnPOBvcOB8IffFPGNRkNeJ=
        4E2DgsFFVyXJOiAa1x4IoKaa0gk/42w/m5zulvL-Q6CPvIEVLfb8IQ/h2/ugDbDHsR7k41P5FY8=
        0tsR5ViKQRdxI0VVjW98Hmy6dc" target=3D"_blank" rel=3D"noopener noreferrer no=
        follow">Sign up</a></span><span style=3D"font-size:0.8rem;"> | </span><span=
         style=3D"font-size:0.8rem;"><a class=3D"link" href=3D"https://link.mail.be=
        ehiiv.com/ss/c/d31s0Mb7BykN_c7U5zRY3d-SI45EpOIF5A13ZVU12k3WMANQUZvfXNCam-wH=
        A6mCtiQKMf48_WZZ_OlfdFp_gkYjqeT3flcSu5cqaiAlhj0CQtMYls_VyZBxgwj8DixjrtpcTjC=
        9KYub7zroHgRhWTIUyPzgI8lRdnZx770WPxs/42w/m5zulvL-Q6CPvIEVLfb8IQ/h3/F1hwQO5I=
        fKdMnJyTnsdzpii_zGMDNLQUv5MGgUX9h-Y" target=3D"_blank" rel=3D"noopener nore=
        ferrer nofollow">Advertise</a></span><span style=3D"font-size:0.8rem;"> | <=
        /span><span style=3D"font-size:0.8rem;"><a class=3D"link" href=3D"https://l=
        ink.mail.beehiiv.com/ss/c/Zbmry1EbCGgS3s0XZ11IPVy1Rxjcv3dTIA1-96P-ZbDCaR-ob=
        qAXorKDjpOJozAZkH62CJHaRDD-yk0rfciBSuf_hOzgYCpRtrHjSvkWi6OYU1pYJy0DvYoGVDFQ=
        h90S4nQ6wBG1ao02mt5aRwTscCr5K1ocryqnLbwNIH8cDcE/42w/m5zulvL-Q6CPvIEVLfb8IQ/=
        h4/xvXDN_FnWIxSsX3GDL1mX-va8O9NAB2dGpBd62RlLqw" target=3D"_blank" rel=3D"no=
        opener noreferrer nofollow">Ben=E2=80=99s Bites News</a></span><br><span st=
        yle=3D"font-size:0.6rem;">Daily Digest #323</span></p></td></tr><tr><td ali=
        gn=3D"center" valign=3D"top" style=3D"font-size:0px;line-height:0px;padding=
        :20px 0px;" class=3D"dd"><table class=3D"j" role=3D"none" width=3D"100%%" b=
        order=3D"0" cellspacing=3D"0" cellpadding=3D"0" align=3D"center"><tr><td> &=
        nbsp; </td></tr></table></td></tr><tr><td><table role=3D"none" width=3D"100=
        %" border=3D"0" cellspacing=3D"0" cellpadding=3D"0" style=3D""><tr><td bgco=
        lor=3D"transparent" style=3D"background-color:transparent;padding:0px 0px 0=
        px 0px;"><table role=3D"none" width=3D"100%" border=3D"0" cellspacing=3D"0"=
         cellpadding=3D"0"><tr><td class=3D"dd" align=3D"left" style=3D"padding:0px=
         25px;text-align:left;word-break:break-word;"><p><span style=3D"">Hello fol=
        ks, here=E2=80=99s what we have today;</span></p></td></tr><tr><td class=3D=
        "dd" align=3D"left" valign=3D"top" style=3D"padding:0px 25px;text-align:lef=
        t;"><h6><span style=3D"color:rgb(17, 119, 235);"><b>PICKS</b></span></h6></=
        td></tr><tr><td style=3D"padding-bottom:10px;padding-left:25px;padding-righ=
        t:25px;padding-top:0px;" class=3D"ee"><div style=3D"margin-left:0px;" class=
        =3D"edm_outlooklist"><ol start=3D"1" style=3D"list-style-type:decimal;margi=
        n:0px 0px;padding:0px 0px 0px 0px;"><li class=3D"listItem ultext"><p style=
        =3D"padding:0px;text-align:left;word-break:break-word;"><span style=3D"">I=
        =E2=80=99m writing a series exploring </span><span style=3D""><b><a class=
        =3D"link" href=3D"https://link.mail.beehiiv.com/ss/c/2mEwMjuR9Ftp1uNMjV2BI_=
        kqa2wExC8tngdDHNC2L8D45a5Kch3w6k7tDc2KHqdeXmvPLZBrZKqmbTkySxlp2BWioG6ZEjw_k=
        7GshpK4wB57H3IZT0TMVhPJ7EVRZdyKH5VEC3Znhd3N9qttOJTFLQLJj8Nucqhq1WuKxt4o_mrS=
        7YmZ0t5PHC5-hutzpXE5b3-YT0ajME_lTLS60KFUX9dOrzIoHsyrDmeeyTqvQfU1iaM2FHD__DP=
        uTLL8fHTvSEK_liQW78XfqGSvD8eGD3hAoWrDRyII0GpI71VZD0S5Afd2xwLDQRpjOT-IhNh4Mu=
        hx21nMylaHG43dwKM5CE5i4_cWEX63sX6tmwo_eZutwkS0j8LEko1k-qtvmEh-Eu-BNmudlrE_k=
        UFKa8otOGqV4cnVzEmbh1GniKX9oeuWVvS-JxMfH3GmlPcqPscVIkHt2hS--drsrnWrPgv_F8mj=
        LuMElbje-ZzbFQXP-yyeSubcva3A8hL5JigTm-7AOGP-JlUpVruLrDd3q_FfkIYIBWx_aFyRY-K=
        9FRJk1B0DwUKjHO_IMoMmxjsir3ppjK-JSzHcnNLDPLOXw76-Nu-A4AbBwZEVQHg3evByPSdMZU=
        Q9eHfg2aVwdswGhyCBO2F2vFEJeoivYg37dunCoA/42w/m5zulvL-Q6CPvIEVLfb8IQ/h5/RHs6=
        3GWC1iUz8Sr2_yzuCgDEmJZ1KvuDCkTbFbKN3Do" target=3D"_blank" rel=3D"noopener =
        noreferrer nofollow">AI=E2=80=99s impact on specific jobs.</a></b></span><s=
        pan style=3D""> Today I=E2=80=99m breaking down what AI is changing for fro=
        nt-end engineers and how these lessons apply to other roles.</span></p></li=
        ><li class=3D"listItem ultext"><p style=3D"padding:0px;text-align:left;word=
        -break:break-word;"><span style=3D""><a class=3D"link" href=3D"https://link=
        .mail.beehiiv.com/ss/c/rT9_QVANPSStlLiPmeZYQaWTflGnn3eTuiTSqonNTIXT2p4ACmCW=
        EoTcsEdSHPWrtic2S8hK0pcJDMZr1umwG7sLYGlYwFm7DgVvsTdEwL4tDqhVTGEHRMUB8E3vJnq=
        _v6A0Wk89hleERYy0qWwX4F5pkCUC7L7rn_KPDiRuTfV6sgB8IvBicQVTjSErglFd/42w/m5zul=
        vL-Q6CPvIEVLfb8IQ/h6/kXp1E0rXorb1gfNMEkXFCajmwF7qVuhcWChKPDrBrFE" target=3D=
        "_blank" rel=3D"noopener noreferrer nofollow">OpenAI=E2=80=99s GPT store is=
         finally live.</a></span><span style=3D""> We all knew that was coming. But=
         what=E2=80=99s OpenAI without surprise releases? We now have a </span><spa=
        n style=3D""><a class=3D"link" href=3D"https://link.mail.beehiiv.com/ss/c/r=
        T9_QVANPSStlLiPmeZYQaWTflGnn3eTuiTSqonNTIVVd5jqVBI28FsrXwUXHSA9VofEIwz_HJvK=
        EN32rwbSHo1hfw828zuGxj5Lvks5zVKXxTPcCh9GfJnzEA40NRNcYB9Lv39mW8jwooLEhgLXzUj=
        jb1Z4-nDGOE1z3UhkeCHwuKlOrBx86oSxqsgSP4_Q/42w/m5zulvL-Q6CPvIEVLfb8IQ/h7/bol=
        uYFhMMEWbNQlQBYaDiUxb-1h00b64qSptSYPiuxA" target=3D"_blank" rel=3D"noopener=
         noreferrer nofollow">ChatGPT for teams</a></span><span style=3D""> plan at=
         </span><span style=3D""><b>$30/month/user</b></span><span style=3D""> ($25=
         if annual). GPTs are getting </span><span style=3D""><b>more personalized<=
        /b></span><span style=3D""> too. (Not out to everyone yet but hopefully soo=
        n!)</span>=F0=9F=8D=BF<span style=3D""><a class=3D"link" href=3D"https://li=
        nk.mail.beehiiv.com/ss/c/2mEwMjuR9Ftp1uNMjV2BI_kqa2wExC8tngdDHNC2L8CXeaVsw7=
        UntwHpdntkzzGbIByLxqyF7JsOtuo60JZIkFLwTFKgRdoDaFrSyOTHFTCuoJqOJuE6dM0U7tbm3=
        FddJQaIBsi55uwkT0pl0Hm7_ynYw2xCiA1UgZfnx8fnywehyOYYbm_AIrLbikqBQWTRotgUwDiE=
        4wkF-ocPoCct6yqIG-uoMfNuxaumuNI2Oa_cSttciBI83hvSEnr6Fc-jXnqpdWedQvPkeQt-crX=
        CL3A35Eo6b1R1qV7nPwtj64--oSvZnGe6A034eRxivaIMxUe_DKEI2UsU_uNsSVC0TWrlIp1hwr=
        ZS4NwEyjVmYG6aWU3cgLQXrZQ0YQYRDlnV7pJBix-BNHjpKWva_Bul64kDffjA-djUoUf6rtphC=
        youuUyVmOdev5J4dw1tu3YQEUEr3aDPjLCfDzRLbP-mUM7Ob4Z4P8bFgh9RkHsqQ6bjhf8TOIV7=
        tleaYPrDoAyRm4j9i2ceHrar-7pP5QmOmik5X1VoXnnHbL5__wKMeF3AmInc5a-bUmZlcMurD0O=
        sNJ3ckyBI6EnrEXY59FTexz6DeFcvqPGylu1O-dRdiN8/42w/m5zulvL-Q6CPvIEVLfb8IQ/h8/=
        xUvtu-LJ9AO3_4plO1scFar6dX2IeJ8-ouzfYKpFaFk" target=3D"_blank" rel=3D"noope=
        ner noreferrer nofollow">Our Summary</a></span><span style=3D""> (also belo=
        w)</span></p></li><li class=3D"listItem ultext"><p style=3D"padding:0px;tex=
        t-align:left;word-break:break-word;"><span style=3D""><a class=3D"link" hre=
        f=3D"https://link.mail.beehiiv.com/ss/c/znicDlvJFyGBhcMAVWxZFnYQf8FnOHU7nK8=
        iUF8Udb-CZ6r8W_92kODiB0cOgiiIeYKtshNhNFlCUuPtZatWXTdMpfZq6fGU4Is8snt3t5swXl=
        VVIjJBdbGEptH12EbbkiWYBSi3rkbhkhfvcHzYsxuV1q76bM1h7BxMrnP2-pprAAj1K26AXl24G=
        Sq-tSvmbh2LIPtogUYaJo5ZLvP-fxoEvad8uyMvv5t-1zIcPnXs3bMdkI7x6q5_n0pZWBQc/42w=
        /m5zulvL-Q6CPvIEVLfb8IQ/h9/71QKTHp-jj8k6TnhrMXRBfr7IUCoMR9ssOfAQSQ3KKc" tar=
        get=3D"_blank" rel=3D"noopener noreferrer nofollow">Alexa gets AI skills: <=
        /a></span><span style=3D""><a class=3D"link" href=3D"https://link.mail.beeh=
        iiv.com/ss/c/znicDlvJFyGBhcMAVWxZFnYQf8FnOHU7nK8iUF8Udb-CZ6r8W_92kODiB0cOgi=
        iIeYKtshNhNFlCUuPtZatWXTdMpfZq6fGU4Is8snt3t5swXlVVIjJBdbGEptH12EbbkiWYBSi3r=
        kbhkhfvcHzYsxuV1q76bM1h7BxMrnP2-pprAAj1K26AXl24GSq-tSvmbh2LIPtogUYaJo5ZLvP-=
        fxoEvad8uyMvv5t-1zIcPnXs3bMdkI7x6q5_n0pZWBQc/42w/m5zulvL-Q6CPvIEVLfb8IQ/h10=
        /v-qeCw9rW7K_GvHNlX4zvbEjngmG94g-p5dPg-e498g" target=3D"_blank" rel=3D"noop=
        ener noreferrer nofollow">characters, music and 20-questions</a></span><spa=
        n style=3D"">. Amazon announced new generative AI capabilities for Alexa at=
         CES 2023. Three developers - </span><span style=3D""><b>Character.AI, Spla=
        sh, and Volley</b></span><span style=3D""> - introduced Alexa skills powere=
        d by LLMs.</span>=F0=9F=8D=BF<span style=3D""><a class=3D"link" href=3D"htt=
        ps://link.mail.beehiiv.com/ss/c/2mEwMjuR9Ftp1uNMjV2BI_kqa2wExC8tngdDHNC2L8B=
        Q026HuyEeJhOkuCbhIe0WO-3CpEfFpsWqxJD7lmRNi3TBjjTl98M-PT7MpkuQDC8YzMz_UnoEBC=
        zvb-tlZuF3SpSm06tGPsWwQyxXF7aUo9x3T2hFTC9_NYboHnYKtb0h1LTaW-x-MniIOcFL5Ch6L=
        NT5nnV0QlBSphcmflJQYptTNRda75BrZ3vEsJwM8js-uEbd1PZVPNgHxIZKoa3ojpqAyBReCUYZ=
        5kEGAUivQlVhlIIkeCJ3TRvEKlojSH4QZHx3xBdJJg5onw6v-REUhvRO6UPQwctMtYQU56OnOvO=
        IHPzT7dKxbzrxqAYI7R2xzSa2npY2I2FwGST6RjPToVFqZSNgTOu28Muhx1fB25m2WkpuzO1OO8=
        nS0Q4zGmh4p_CX9RWLKmkmICRc1aEgjuf_vG-VUUnQ_v_FC0OBXA97xkcvtJATN1AR5UkzazNQI=
        ZYSNIGAC5yRKre_rVc5OfptWpfGE5bRh2SxcgauP4_JMWUU5jbO6WIVqFogIjC8QIDZzmZ5XpTp=
        xiVJ2mzlEcBeO-jJaWIiZkfjDQQjGxF4cTmb1NYsUkkzWGv292Otts4xOXxt1Bg6pZ-a9GjDbP2=
        ibNfeYyFZx4S9K0Q-iQ/42w/m5zulvL-Q6CPvIEVLfb8IQ/h11/CwI_anaLKROymSO2AD5rq4Cw=
        SpuyeYx0-UqoeD8AXNU" target=3D"_blank" rel=3D"noopener noreferrer nofollow"=
        >Our Summary</a></span></p></li><li class=3D"listItem ultext"><p style=3D"p=
        adding:0px;text-align:left;word-break:break-word;"><span style=3D""><a clas=
        s=3D"link" href=3D"https://link.mail.beehiiv.com/ss/c/rT9_QVANPSStlLiPmeZYQ=
        SXDh6v4shDdtqNWZjvq38sH66rgucA7eokc3ZIp9DBJ5JtmZN39WcEEVGfOoK0sfJE0SJHeF6Ij=
        vRePVPONLSYy1kVO9PUOwckgc9AKFKRzz8J2WQwoRH21qw03VTIKRTLEsif4S6f7OHO1AKeviGB=
        R3qGVQm1DUplVq8PazC7qs22YYlAe01Jeb20YIjAoPNn5IIFEiu_H-ofJqT7bd_TwsSL63MuKu8=
        Cgoh981rpI1z35tU5uCX3DhTB8F_f09w/42w/m5zulvL-Q6CPvIEVLfb8IQ/h12/ceiMQtTDk5t=
        0n-1dji_UdQVEFhFkBllifkhfBBLwxoo" target=3D"_blank" rel=3D"noopener norefer=
        rer nofollow">Sam Altman and Bill Gates</a></span><span style=3D""> chat ab=
        out AI, atomic energy and other things.</span></p></li></ol></div></td></tr=
        ></table></td></tr></table></td></tr><tr><td align=3D"center" valign=3D"top=
        " style=3D"font-size:0px;line-height:0px;padding:20px 0px;" class=3D"dd"><t=
        able class=3D"j" role=3D"none" width=3D"100%%" border=3D"0" cellspacing=3D"=
        0" cellpadding=3D"0" align=3D"center"><tr><td> &nbsp; </td></tr></table></t=
        d></tr><tr><td><table role=3D"none" width=3D"100%" border=3D"0" cellspacing=
        =3D"0" cellpadding=3D"0" style=3D""><tr><td bgcolor=3D"transparent" style=
        =3D"background-color:transparent;padding:0px 0px 0px 0px;"><table role=3D"n=
        one" width=3D"100%" border=3D"0" cellspacing=3D"0" cellpadding=3D"0"><tr><t=
        d class=3D"dd" align=3D"left" valign=3D"top" style=3D"padding:0px 25px;text=
        -align:left;"><h6><span style=3D"color:rgb(17, 119, 235);"><b>TOP TOOLS</b>=
        </span></h6></td></tr><tr><td style=3D"padding-bottom:10px;padding-left:25p=
        x;padding-right:25px;padding-top:0px;" class=3D"ee"><div style=3D"margin-le=
        ft:0px;" class=3D"edm_outlooklist"><ul style=3D"list-style-type:disc;margin=
        :0px 0px;padding:0px 0px 0px 0px;"><li class=3D"listItem ultext"><p style=
        =3D"padding:0px;text-align:left;word-break:break-word;"><span style=3D""><a=
         class=3D"link" href=3D"https://link.mail.beehiiv.com/ss/c/XquylLLD3d8q1iIM=
        9g4N9fdPAVuri0ejizcZkNqMqqQJb6oORjf_zkC23tuFl2Qvv-jPdHP8ncKbT_-W6JG7OSTLbzD=
        EoJGvdci7RXD0sDTBfHYuT54qAGeT8SW-Rdl0TIgnDSI1AO1ht-39_T3OrPw7mRzoaSjgUPzs01=
        xBxrI/42w/m5zulvL-Q6CPvIEVLfb8IQ/h13/bCdPhUJnhvQNgp2t2c333NC3lrstMSl4iZNtYt=
        PoW3Y" target=3D"_blank" rel=3D"noopener noreferrer nofollow">Corgea</a></s=
        pan><span style=3D""> - Fix </span><span style=3D""><b>vulnerable code</b><=
        /span><span style=3D""> automatically.</span></p></li><li class=3D"listItem=
         ultext"><p style=3D"padding:0px;text-align:left;word-break:break-word;"><s=
        pan style=3D""><a class=3D"link" href=3D"https://link.mail.beehiiv.com/ss/c=
        /ghcpMI66Y3K9R6Qlw2R59kaD8aEEN8EV7sCrMKheOO9XbjoT76_1FmtcyxqmIaJwKusXQ1UnHH=
        nXDM-7tZqZexekHBZYW40lLh4kdZ--yHMm6TRtZ8qynlutpqmNHq2xhqq8jSk0Rs4yBZYDlLeW6=
        ivxh0ioF_t_HaSD2AbWstM/42w/m5zulvL-Q6CPvIEVLfb8IQ/h14/JXKjVq2Y31JWxI8CUjYfb=
        tm2fFqXROR5s1P0n1erg9M" target=3D"_blank" rel=3D"noopener noreferrer nofoll=
        ow">Mercor</a></span><span style=3D""> - Redefining </span><span style=3D""=
        ><b>hiring</b></span><span style=3D""> with AI.</span></p></li><li class=3D=
        "listItem ultext"><p style=3D"padding:0px;text-align:left;word-break:break-=
        word;"><span style=3D""><a class=3D"link" href=3D"https://link.mail.beehiiv=
        .com/ss/c/5J8WPrGlKFK1BUsRYoWIfex5TSJ_aRq5aCs5b0lPuqfMYbJmKYaLErSVJEdK59YI2=
        HcGx7FxYYzOA1IX6JzqjQp5f0jQpKXvPFyBxhmcCtx6X46rwtDjJEKExxT4mkH6LieCtFmgtT6b=
        4T8k-Pnpknk3F6ttGnLKIn7_kFi2NPI/42w/m5zulvL-Q6CPvIEVLfb8IQ/h15/l3JLU3H1G3rH=
        wZVMGfE3Uwoxj_Tdbte6f2aFE7U4fbM" target=3D"_blank" rel=3D"noopener noreferr=
        er nofollow">MoAIjobs</a></span><span style=3D""> -</span><span style=3D"">=
        <b> Find a job</b></span><span style=3D""> in AI.</span></p></li><li class=
        =3D"listItem ultext"><p style=3D"padding:0px;text-align:left;word-break:bre=
        ak-word;"><span style=3D""><a class=3D"link" href=3D"https://link.mail.beeh=
        iiv.com/ss/c/SPlbjzN8xI24VsbvJdluiNvP7oxu_ydmT1DSjWjoVpZzHUFzWV3c_3tZhbXvaB=
        WZyL9FX4Bb2RELDY-bfPxaXHwOb_Pg9aB6HZeDRTkI35VOPk3NNcgWJfoTBSM9QnUXceGnMWYIm=
        tU7q2zQ17bGIDfA5VgFQzusYUSXldvBhWQ/42w/m5zulvL-Q6CPvIEVLfb8IQ/h16/5Lb3VetSD=
        T6utg8IvUaDyyVrjYhWzTrRm-xyxVFr_AY" target=3D"_blank" rel=3D"noopener noref=
        errer nofollow">Pretend</a></span><span style=3D""> - iOS app to</span><spa=
        n style=3D""><b> swap your face</b></span><span style=3D""> with AI.</span>=
        </p></li><li class=3D"listItem ultext"><p style=3D"padding:0px;text-align:l=
        eft;word-break:break-word;"><span style=3D""><a class=3D"link" href=3D"http=
        s://link.mail.beehiiv.com/ss/c/5J8WPrGlKFK1BUsRYoWIfQ5K_tEMeWxLHoC8SeZeko6P=
        w-yNZEEFSbu-TZEspOX19bBsJheKaTh7f0FjKXY4Y1bKpUCRLTeg_boiCHHdhrM3axMgieJigGQ=
        _N4TLgBegyPcBkBuX9slxuCb_wxCmKPi92XCs1f91H3392emOTuk/42w/m5zulvL-Q6CPvIEVLf=
        b8IQ/h17/08DQ3Kazn0l0uyNG3vpjVdG4PqgSk7o9IrPk1K5D15E" target=3D"_blank" rel=
        =3D"noopener noreferrer nofollow">Clarity State</a></span><span style=3D"">=
         - Catch issues and blindspots in your </span><span style=3D""><b>data argu=
        ments.</b></span></p></li></ul></div></td></tr><tr><td class=3D"dd" align=
        =3D"left" style=3D"padding:0px 25px;text-align:left;word-break:break-word;"=
        ><p><span style=3D""><b>Tools for GPTs:</b></span></p></td></tr><tr><td sty=
        le=3D"padding-bottom:10px;padding-left:25px;padding-right:25px;padding-top:=
        0px;" class=3D"ee"><div style=3D"margin-left:0px;" class=3D"edm_outlooklist=
        "><ul style=3D"list-style-type:disc;margin:0px 0px;padding:0px 0px 0px 0px;=
        "><li class=3D"listItem ultext"><p style=3D"padding:0px;text-align:left;wor=
        d-break:break-word;"><span style=3D""><a class=3D"link" href=3D"https://lin=
        k.mail.beehiiv.com/ss/c/OESWuT0GJxehI2zPwX35HSOmExtWN56x30FyWdZIFoy9ejc-FIb=
        DlFePhYi6SAs_dmKg_H_5r9Y-DrnefOHbgRYv5nRSMaisP_iYWc52uKamJ5xi4OHr21dgYswAxT=
        w94gklUGEqDA9Hx3tBgXQtpXJfI8UIOePUXF23BmNssRk/42w/m5zulvL-Q6CPvIEVLfb8IQ/h1=
        8/e_XkuCe8fbqPHGf_6-rcB-a9wBloe5eLtPw8QyokC20" target=3D"_blank" rel=3D"noo=
        pener noreferrer nofollow">lil GPTs</a></span><span style=3D""> -</span><sp=
        an style=3D""><b> Tiny GPTs,</b></span><span style=3D""> for not so tiny ta=
        sks.</span></p></li><li class=3D"listItem ultext"><p style=3D"padding:0px;t=
        ext-align:left;word-break:break-word;"><span style=3D""><a class=3D"link" h=
        ref=3D"https://link.mail.beehiiv.com/ss/c/XquylLLD3d8q1iIM9g4N9bYJ16uZzKwf2=
        R77R9-gg93dfbcYAszFflActdgyrLlSoabzXpGypSkk-hsgn3RUI2zC7Q6L-Hs4dipIxrzNQNmN=
        YmwCIkRuBQNc-ggaBIK1nnPxv1tS3FZrJB6D_2vl9Jk7WD5qiPXFkdLjqugefgs/42w/m5zulvL=
        -Q6CPvIEVLfb8IQ/h19/QVRgpHoI0H0V1ucMgJq9xCBEgzgjBNs_25voE5QZM6E" target=3D"=
        _blank" rel=3D"noopener noreferrer nofollow">ChatCollect</a></span><span st=
        yle=3D""> - </span><span style=3D""><b>Collect emails</b></span><span style=
        =3D""> from your GPT users.</span></p></li><li class=3D"listItem ultext"><p=
         style=3D"padding:0px;text-align:left;word-break:break-word;"><span style=
        =3D""><a class=3D"link" href=3D"https://link.mail.beehiiv.com/ss/c/yrHbMDIc=
        TiiEgUzBYIuoqTDEk87rZ7tgdMTGoB8zhliEwAwu_BgfVER8r41Cfq8Bjezwiy28-JbneUtnmru=
        y6K_PdENNFE3wwOHpVRK7Koij0q2m9KOVKkJLfbPp78q1OVj3eMhV9HjX7ihFlowgcm49BFwVHF=
        oZkKpzEZK6JVg/42w/m5zulvL-Q6CPvIEVLfb8IQ/h20/5yUfSFx0L1DdY-ngXeEKzAqp7Zerje=
        pgnwwwx0AbIqg" target=3D"_blank" rel=3D"noopener noreferrer nofollow">GPT A=
        uth</a></span><span style=3D""> - </span><span style=3D""><b>Authentication=
        </b></span><span style=3D""> and analytics for GPTs.</span></p></li><li cla=
        ss=3D"listItem ultext"><p style=3D"padding:0px;text-align:left;word-break:b=
        reak-word;"><span style=3D""><b><a class=3D"link" href=3D"https://link.mail=
        .beehiiv.com/ss/c/DAD824xpVqHdBxO2hhBN5771Nd4r6ZDkDvlLgTUgSeG7P5JutYFuxUtkH=
        fcMKY795sddMTvlFVf2PnlydyvSkMZenIRSwroBqof3TxvPdK8c1OoxOzb7UCoyfaVrGNdll4oh=
        5yV7BqbhiFXUi1FC5CSU2ho36qFF4NM86wrPVkz8ffLccuk1phtEx4VUoZcm/42w/m5zulvL-Q6=
        CPvIEVLfb8IQ/h21/XuBU8n5VaWEDHZ3DYpJYV1Ayf4x-vs_8r8nFYHZcMAg" target=3D"_bl=
        ank" rel=3D"noopener noreferrer nofollow">Free link shortener</a></b></span=
        ><span style=3D""> for your Custom GPTs.</span></p></li></ul></div></td></t=
        r><tr><td class=3D"dd" align=3D"left" style=3D"padding:0px 25px;text-align:=
        left;word-break:break-word;"><p><span style=3D""><b>Few quirky/unique GPTs:=
        </b></span></p></td></tr><tr><td style=3D"padding-bottom:10px;padding-left:=
        25px;padding-right:25px;padding-top:0px;" class=3D"ee"><div style=3D"margin=
        -left:0px;" class=3D"edm_outlooklist"><ul style=3D"list-style-type:disc;mar=
        gin:0px 0px;padding:0px 0px 0px 0px;"><li class=3D"listItem ultext"><p styl=
        e=3D"padding:0px;text-align:left;word-break:break-word;"><span style=3D""><=
        a class=3D"link" href=3D"https://link.mail.beehiiv.com/ss/c/XquylLLD3d8q1iI=
        M9g4N9cKvg6v1mpyEcdobZIialyD4ukSJi_wGEpqO4gAaXbn43ltl_jTqJBtLzgv11A5yj8SkDS=
        hH3sCRqSsgmnjTQ9xJaEl-p3XXq65-Lqqd25ICpDSCEjaEbX7rTFgQZMtAkJNhRtNkI7_IGWAvA=
        MR1OcV3RRnSF2DwYpEKrVoq3ZqiofHUTPu2DlCkSkrF2091BQ/42w/m5zulvL-Q6CPvIEVLfb8I=
        Q/h22/U7Pc1d0LsxiDaAM70rNfUAOZet-CG6NHOCgVGx-CKBU" target=3D"_blank" rel=3D=
        "noopener noreferrer nofollow">Hogwarts Sorting Hat</a></span><span style=
        =3D""> - </span><span style=3D""><b>Where do you belong?</b></span><span st=
        yle=3D""> Your face and your mind tell it all.</span></p></li><li class=3D"=
        listItem ultext"><p style=3D"padding:0px;text-align:left;word-break:break-w=
        ord;"><span style=3D""><a class=3D"link" href=3D"https://link.mail.beehiiv.=
        com/ss/c/XquylLLD3d8q1iIM9g4N9cKvg6v1mpyEcdobZIialyDRfErgeaKluLyxPuNxxMhqtr=
        1026_1lAJXizPfYBPTiGbXXn2Gk9IRbp3ihJ1-XsB5ZpA3_VYUp6q1CVs3VdAiyZ6n2Qj1Y_iIX=
        NYJk-juke-Qog3bypixvDHuJxc7eGf-0ln_V0XG3OQZ_Fd6tBQWoRqCVYoRrY6VHvZQ5dw7gA/4=
        2w/m5zulvL-Q6CPvIEVLfb8IQ/h23/3J2l5XtQM-B3g80iRl2LR2W8KuR-X_E8FmP23b9m60Y" =
        target=3D"_blank" rel=3D"noopener noreferrer nofollow">Gift Whisperer</a></=
        span><span style=3D""> - Share IG grid screenshot, get </span><span style=
        =3D""><b>gift ideas.</b></span></p></li><li class=3D"listItem ultext"><p st=
        yle=3D"padding:0px;text-align:left;word-break:break-word;"><span style=3D""=
        ><a class=3D"link" href=3D"https://link.mail.beehiiv.com/ss/c/XquylLLD3d8q1=
        iIM9g4N9cKvg6v1mpyEcdobZIialyDM7Mvly6TBNCYrSR1y_KJKe-FjlQg6qF_zhJjkDeADTzQc=
        jo05CWF8ACi31TibOHZR5L4yfiKf-8_3c65VD6JgmvBci9a1MIac1NoK_hI0DG3Dj4q4OVn9RKQ=
        TKEpzLyGUh-bkzfwwzK99eNQ-Xm1xR9pLZxq4Au6RRWcvWb9bPg/42w/m5zulvL-Q6CPvIEVLfb=
        8IQ/h24/8FNhL2ogyf-LrrOHFDreNmiewcR_HbkMOdMB9xQQfew" target=3D"_blank" rel=
        =3D"noopener noreferrer nofollow">CrewAI assistant</a></span><span style=3D=
        ""> - GPT to get started with </span><span style=3D""><b>building agents</b=
        ></span><span style=3D""> using CrewAI.</span></p></li></ul></div></td></tr=
        ><tr><td class=3D"dd" align=3D"left" style=3D"padding:0px 25px;text-align:l=
        eft;word-break:break-word;"><p><span style=3D""><a class=3D"link" href=3D"h=
        ttps://link.mail.beehiiv.com/ss/c/Zbmry1EbCGgS3s0XZ11IPVy1Rxjcv3dTIA1-96P-Z=
        bBUhUElul0vYlmy-j61z7ltHT-wzHGDuDhqM4UgYipxb8uswVQuj4MA7KQoq_ZXdl0S6gsJPp48=
        HUl0nXPl_pIbKakxLEkcNz7X-JWqZ128nYrZfz61LSwMezGcWkkXFiS2u6UM-tTTkxMfHkgKSUq=
        Z/42w/m5zulvL-Q6CPvIEVLfb8IQ/h25/xv_vWF5RMm_XmMmMp8nv4RPeRXuQJcIVXSu5TUVlqS=
        c" target=3D"_blank" rel=3D"noopener noreferrer nofollow">View more =E2=86=
        =92</a></span></p></td></tr></table></td></tr></table></td></tr><tr><td ali=
        gn=3D"center" valign=3D"top" style=3D"font-size:0px;line-height:0px;padding=
        :20px 0px;" class=3D"dd"><table class=3D"j" role=3D"none" width=3D"100%%" b=
        order=3D"0" cellspacing=3D"0" cellpadding=3D"0" align=3D"center"><tr><td> &=
        nbsp; </td></tr></table></td></tr><tr><td><table role=3D"none" width=3D"100=
        %" border=3D"0" cellspacing=3D"0" cellpadding=3D"0" style=3D""><tr><td bgco=
        lor=3D"transparent" style=3D"background-color:transparent;padding:0px 0px 0=
        px 0px;"><table role=3D"none" width=3D"100%" border=3D"0" cellspacing=3D"0"=
         cellpadding=3D"0"><tr><td class=3D"dd" align=3D"left" valign=3D"top" style=
        =3D"padding:0px 25px;text-align:left;"><h6><span style=3D"color:rgb(17, 119=
        , 235);"><b>NEWS</b></span></h6></td></tr><tr><td class=3D"dd" align=3D"lef=
        t" style=3D"padding:0px 25px;text-align:left;word-break:break-word;"><p><sp=
        an style=3D""><b>Startups and incumbents:</b></span></p></td></tr><tr><td s=
        tyle=3D"padding-bottom:10px;padding-left:25px;padding-right:25px;padding-to=
        p:0px;" class=3D"ee"><div style=3D"margin-left:0px;" class=3D"edm_outlookli=
        st"><ul style=3D"list-style-type:disc;margin:0px 0px;padding:0px 0px 0px 0p=
        x;"><li class=3D"listItem ultext"><p style=3D"padding:0px;text-align:left;w=
        ord-break:break-word;"><span style=3D""><b><a class=3D"link" href=3D"https:=
        //link.mail.beehiiv.com/ss/c/2mEwMjuR9Ftp1uNMjV2BIwNaTaNB7mIOw7UPiOS_AR7aGc=
        SfJ9IsxNzN6PVla_-0mMPOHGZ1KpI1tirwniP4jH3GwDwf0bdBKRU0LHvJFZPPP8R2bhutpZMsk=
        MjSrf0p_Oju_KinCTP0Uhb8Z6brQ87F-SRQ9LLNd82bkxxHiiVHbEaH4aWGg9ZsR8Apa9_mkgmn=
        ykLC_zbNH5msRbru8-buKZC6USuwMcWIlZK7YsaVcjwt72YgcF98E0FD2fqR/42w/m5zulvL-Q6=
        CPvIEVLfb8IQ/h26/rPmbxdymnj3jWYk7Y_dBANAD6bWgxuMap1ebhol_sr8" target=3D"_bl=
        ank" rel=3D"noopener noreferrer nofollow">Leap AI raises $1.4M</a></b></spa=
        n><span style=3D""><b>=C2=A0</b></span><span style=3D"">round led by Founde=
        rs Inc.</span></p></li><li class=3D"listItem ultext"><p style=3D"padding:0p=
        x;text-align:left;word-break:break-word;"><span style=3D""><b><a class=3D"l=
        ink" href=3D"https://link.mail.beehiiv.com/ss/c/znicDlvJFyGBhcMAVWxZFnYQf8F=
        nOHU7nK8iUF8Udb_aQfwGYDEjlQQNhaYuLgfnkJJbA3RUnNpZ8cNBi7gCChZ2lFjq8hTl_NO1DC=
        cxIa1azPIQqEpe7NdcTDjNhSORvFMYaMEsgPNIrCnGEavCmTZHIIwJoZ1P8Jrcy7LH2z9-M2LsO=
        0mOU7C8r66pXuQPaJWDQHJ1UkVD-q_kkHWWSfz5RnXeuzOhnSHLKq_IkSwBnisyuiyRi30Sx_oK=
        bVkXNqibBnK5c4kO5TKUbq_ZUjznM92rc5GIGH_yg2iLoTs/42w/m5zulvL-Q6CPvIEVLfb8IQ/=
        h27/TGswOwnuPwRuEpESBOQDUhkjWBZn4Cme4-t7fihBgps" target=3D"_blank" rel=3D"n=
        oopener noreferrer nofollow">Photoroom AI is raising $50-60M</a></b></span>=
        <span style=3D""><b>=C2=A0</b></span><span style=3D"">at a $500-600M valuat=
        ion.</span></p></li><li class=3D"listItem ultext"><p style=3D"padding:0px;t=
        ext-align:left;word-break:break-word;"><span style=3D"">12 startups battlin=
        g for</span><span style=3D""><b>=C2=A0</b></span><span style=3D""><b><a cla=
        ss=3D"link" href=3D"https://link.mail.beehiiv.com/ss/c/5J8WPrGlKFK1BUsRYoWI=
        fWb9LRbYU2gbMD8PidOW1gp_7MEd-Od5tTZKBRmV9VECpWVk3xGwk66_LlXa3jTlxaMAhf8oBBI=
        7pk6eAkM3CxjHcxlUnQWdfsqvtuXGwFsgqW8DBi1O2EhOxLk2QJygUhSBxvwnRYk-fBykeUt3JT=
        CKEkEJ1VzYNm26yrA46qwuJO5muuAps3aOFg1QV7hP8pwQ8918LA12IqI5C1S_5upYMB5UhXdQK=
        eMoE4zM8J3d48rSSeuyqvgJV0WabhbBIw/42w/m5zulvL-Q6CPvIEVLfb8IQ/h28/p4BEsrbAsS=
        JiQ_RsZn_Efo4ZfDNtHfgU95vzG0hqoPA" target=3D"_blank" rel=3D"noopener norefe=
        rrer nofollow">a slice of Nvidia=E2=80=99s pie.</a></b></span></p></li><li =
        class=3D"listItem ultext"><p style=3D"padding:0px;text-align:left;word-brea=
        k:break-word;"><span style=3D""><b><a class=3D"link" href=3D"https://link.m=
        ail.beehiiv.com/ss/c/d31s0Mb7BykN_c7U5zRY3SbDCiueXQBVsoccg52Ff4UFuv557yAJBd=
        TShBKmVz_cVscRAFxPszJC7ChAfM8K7W037kgAPiwK4lbiTVQbKUWKxZAytvuwlukvAXle7eYWm=
        fdZhWxspe7XBFRlFhM6_LnihM-cTlJA-p1WpJwdps4sHrOCue4SgGVYPkqE9n-og5XWbyCHFQYo=
        1wVTruVjgGFvyfNS3VJEPqwsbTYWvYW_Z_Asg2pCe7gxphZHQomK/42w/m5zulvL-Q6CPvIEVLf=
        b8IQ/h29/hu13EEQxMuJYBRsl6zesZYzUqnOJzgj5aZwioHgnNl0" target=3D"_blank" rel=
        =3D"noopener noreferrer nofollow">Steam allows AI</a></b></span><span style=
        =3D""><b>=C2=A0</b></span><span style=3D"">content in games with disclosure=
        s.</span></p></li><li class=3D"listItem ultext"><p style=3D"padding:0px;tex=
        t-align:left;word-break:break-word;"><span style=3D""><b><a class=3D"link" =
        href=3D"https://link.mail.beehiiv.com/ss/c/5J8WPrGlKFK1BUsRYoWIfXVQEfXzlvqz=
        yrVIIqsyzD0B4THsJ4LI-5sbUAH9siDvdPInv8SnfrFqvaxJ9yj7T7y60Irwa89MevGHX_BWMGu=
        23dg-K02JKthOHcPfNls5PsHhXSGOJLkZrfYR-IJjB2AC6IHk0NJTGnYnH--abVEZBYYFiIvFd9=
        _u5U0SfEjmIzQmwKA1xyTKIDbmNmEHz2HAM_bu5gav8zxtdMfBwk_SMJ7vO5T2J1HlZl1m9HQ4/=
        42w/m5zulvL-Q6CPvIEVLfb8IQ/h30/ZTFJN4isYHx5evLRV3gyrHM3SbWxoJIMJ44L6JFFW8Y"=
         target=3D"_blank" rel=3D"noopener noreferrer nofollow">Walmart adds Gen AI=
        </a></b></span><span style=3D""><b>=C2=A0</b></span><span style=3D"">search=
         to its iOS app.</span></p></li><li class=3D"listItem ultext"><p style=3D"p=
        adding:0px;text-align:left;word-break:break-word;"><span style=3D""><b><a c=
        lass=3D"link" href=3D"https://link.mail.beehiiv.com/ss/c/5J8WPrGlKFK1BUsRYo=
        WIfZkKJ3T0pIfpsHVQVjxgajVitPLRaHQkENvONbT6wBEhKbw8zjUz1p788IxaKacrG5Nogs2Wp=
        Me3YI2FmE5nOPlRuxRrGd07JemqEt0IZGWWkjYoD7Rch9jxhmR84gke1ddAv-FC7oz38WaB39yN=
        aRsmC45NVClsL4fFNnKwOAbFDv_d3hInNNjX83aWQjS9mf_STjCf4BSUqN4zjefY18M1U3ID5lQ=
        cqjP6-XDZYXHM/42w/m5zulvL-Q6CPvIEVLfb8IQ/h31/BAvnH_sJpwjMQx6X0ItotZseBX4O_Z=
        3TXeMUxaewvEk" target=3D"_blank" rel=3D"noopener noreferrer nofollow">Not e=
        ven Notepad is safe</a></b></span><span style=3D""><b>=C2=A0</b></span><spa=
        n style=3D"">from Microsoft=E2=80=99s big AI push in Windows.</span></p></l=
        i></ul></div></td></tr><tr><td class=3D"dd" align=3D"left" style=3D"padding=
        :0px 25px;text-align:left;word-break:break-word;"><p><span style=3D""><b>Th=
        e outside world:</b></span></p></td></tr><tr><td style=3D"padding-bottom:10=
        px;padding-left:25px;padding-right:25px;padding-top:0px;" class=3D"ee"><div=
         style=3D"margin-left:0px;" class=3D"edm_outlooklist"><ul style=3D"list-sty=
        le-type:disc;margin:0px 0px;padding:0px 0px 0px 0px;"><li class=3D"listItem=
         ultext"><p style=3D"padding:0px;text-align:left;word-break:break-word;"><s=
        pan style=3D"">London and Wales </span><span style=3D""><b><a class=3D"link=
        " href=3D"https://link.mail.beehiiv.com/ss/c/3diHqBj_1e22cFpZjMeWvXeEn0Uiz4=
        d20xueBgEPpC2WOz0MfcM8RDQSdWGrGC_2sB9SSoK0P1c-B0PRpNnp7pgpDy5SXEqUsBfkcG-aW=
        o0dG004yKVtPuPHipXPk3a0DlIb9yAdzhfVXzEN2NU__t8qt1ZeDljFQjxVLVp9zg1Bu1lIFyqO=
        Fjr-oGTmduCRS1cmYfs0vB-lPgWK3gTIe2IXozXAdWk61WCMqlPkEw_K3_6HtFfiJ270cg6Sj76=
        VyiVuLrE1miSO29fY6gsbJF5Rer9IVMQN-DxH_QGWxvQ/42w/m5zulvL-Q6CPvIEVLfb8IQ/h32=
        /d4D_-psXL9J1hfJRLf732MijCPH5KUNp7N6McsCHX0M" target=3D"_blank" rel=3D"noop=
        ener noreferrer nofollow">judges can use AI</a></b></span><span style=3D"">=
        <b>=C2=A0</b></span><span style=3D"">but have to be responsible for what it=
         writes.</span></p></li><li class=3D"listItem ultext"><p style=3D"padding:0=
        px;text-align:left;word-break:break-word;"><span style=3D"">State employees=
         in </span><span style=3D""><b><a class=3D"link" href=3D"https://link.mail.=
        beehiiv.com/ss/c/yrHbMDIcTiiEgUzBYIuoqeaee4DXP6eQKrMhj-VHJxiDQKZL7i19dTVY-d=
        LHLtNVw6m2Picz0MkN3ok_DiGldH11kYW2mHYfX2XzdqsNCm8sLFOYPwVvjYS5DWby7GQ5O7LgZ=
        bi1qneplnBbKdEjpONrlrVcSoWIZZ0GKrumkX_AtZL3IgvGqDriQ05AIvr5UJAeepUMA_W4AFNG=
        kaIk9NLg_Md4kyRAL-Oo-LdIeHc/42w/m5zulvL-Q6CPvIEVLfb8IQ/h33/6zHN4eazbPJloIt0=
        FqISUEwrUU24kL1bgR_g6ZPgu_s" target=3D"_blank" rel=3D"noopener noreferrer n=
        ofollow">Pennsylvania government</a></b></span><span style=3D""> will use C=
        hatGPT enterprise.</span></p></li><li class=3D"listItem ultext"><p style=3D=
        "padding:0px;text-align:left;word-break:break-word;"><span style=3D"">Chine=
        se companies are modding Nvidia=E2=80=99s </span><span style=3D""><b><a cla=
        ss=3D"link" href=3D"https://link.mail.beehiiv.com/ss/c/5J8WPrGlKFK1BUsRYoWI=
        fUld3JUmNWmZta1JTmpLF0GwcOzPWo1WFEgWESEl3LE52JzfSejcRrEIg4Rsl8vX617uzVDvoq-=
        zhnhmmftZ-OlGBOvQlJeu32Qh6dZM0r2I8dgzMXwlBv9IuMZj3Q5kbtCBAgTIG_V5pm-YeZbMJN=
        oNyNMq2JmXsgy3TBE9anps0swt9zNPJfHwMS1mwcQ0wQ/42w/m5zulvL-Q6CPvIEVLfb8IQ/h34=
        /Hq5IBAcXDRcB4vvjYOaJJVKTaMT7dlFnFT1uWCrYwXw" target=3D"_blank" rel=3D"noop=
        ener noreferrer nofollow">gaming chips for AI.</a></b></span></p></li><li c=
        lass=3D"listItem ultext"><p style=3D"padding:0px;text-align:left;word-break=
        :break-word;"><span style=3D"">SAG-AFTRA signs a deal with Replica Studio r=
        egarding using </span><span style=3D""><b><a class=3D"link" href=3D"https:/=
        /link.mail.beehiiv.com/ss/c/P0A451SX5yoOCfH91PXvV9oRjVQXs4uO7spkwhnJZ7R4uZU=
        9Fuq2aw75oyBRrIV7OO-ILsjNpCOStK0-83XX-sv0kqHaSOo6bfYCTdvDi3ZZVJ4MiQTTtPqT-Q=
        OyNz5-uMdhuS1CIwdGs0fcsq5dLRt7IXbxQgeJ_R0yHLxJMpzPgKmlWa8HdubXjLe8gdkaUfoGG=
        vf1SjbCaQrkQHqulQAYb2txUh0ykGWy5ChI6g3YxZtpg4iM7YVwbr6F3xAZ/42w/m5zulvL-Q6C=
        PvIEVLfb8IQ/h35/3XrUQ9qjNyYYcobEsmNr2IG2BpC9BP4PFIq244TL1rU" target=3D"_bla=
        nk" rel=3D"noopener noreferrer nofollow">AI replicas of voice actors</a></b=
        ></span><span style=3D""><b>=C2=A0</b></span><span style=3D"">in video game=
        s.</span></p></li><li class=3D"listItem ultext"><p style=3D"padding:0px;tex=
        t-align:left;word-break:break-word;"><span style=3D"">Sal Khan on the </spa=
        n><span style=3D""><b><a class=3D"link" href=3D"https://link.mail.beehiiv.c=
        om/ss/c/SPlbjzN8xI24VsbvJdluiPWky98GPWGPRm5dgElPZmQCMKMcHGi3XJTum30qw4AqOyt=
        Ua6pxHIi65CkjMcSQAdqi70JHGz5GlV6oQA4mkktRbv8-KpdfsWy7r95xqTFCoxFtWvMEq-ivfe=
        iyzk8JFiS-vIjTl5tO7JxDQz_A48GW7IFiM6ddWn2Y2S_TM_RF2kLgIRKFh2OrIObxHQ4Tc5KN2=
        5GN8RanLV7xVCa3bdW_WwwAmAVrhkuWd9IHsVygGVkG13tfBxI_6xnIZ_A1ZA/42w/m5zulvL-Q=
        6CPvIEVLfb8IQ/h36/zF_XBpxqkvFzlIU4ejJaNyw6o6KGyi-3Rh-7z_6b3Ok" target=3D"_b=
        lank" rel=3D"noopener noreferrer nofollow">future of K-12 education.</a></b=
        ></span></p></li></ul></div></td></tr><tr><td class=3D"dd" align=3D"left" s=
        tyle=3D"padding:0px 25px;text-align:left;word-break:break-word;"><p><span s=
        tyle=3D""><b>Research and tutorials:</b></span></p></td></tr><tr><td style=
        =3D"padding-bottom:10px;padding-left:25px;padding-right:25px;padding-top:0p=
        x;" class=3D"ee"><div style=3D"margin-left:0px;" class=3D"edm_outlooklist">=
        <ul style=3D"list-style-type:disc;margin:0px 0px;padding:0px 0px 0px 0px;">=
        <li class=3D"listItem ultext"><p style=3D"padding:0px;text-align:left;word-=
        break:break-word;"><span style=3D""><b><a class=3D"link" href=3D"https://li=
        nk.mail.beehiiv.com/ss/c/ghcpMI66Y3K9R6Qlw2R59riuMAO4z-JnRG-LS0uhcuj-0wwXP7=
        VhH5uoOF5ANn1HtG7_Olq92A9DQSCVIRkxB6vs4UQcKWS1HICeURABEm8PTrx9Y_sfbFVr6AOxn=
        9V4GTZtnFgy7VKNS_Qxv-OfE7XGnc_csGUNBK1is5Ul7i0/42w/m5zulvL-Q6CPvIEVLfb8IQ/h=
        37/-fo8663pdkIsKYQUh89rjTnfKjx1cinahMsgWIbdnww" target=3D"_blank" rel=3D"no=
        opener noreferrer nofollow">MagicVideo V2 by Bytedance</a></b></span><span =
        style=3D""> - Multi-stage, high aesthetic video generation.</span></p></li>=
        <li class=3D"listItem ultext"><p style=3D"padding:0px;text-align:left;word-=
        break:break-word;"><span style=3D"">Deepseek announced a </span><span style=
        =3D""><b><a class=3D"link" href=3D"https://link.mail.beehiiv.com/ss/c/13lD9=
        QpAgGVhFmX0VEPxxaiTUP2L_1A8pa0mskNWz6_8QaXBN9_aU8asOtQou0PUalEArX_5gOVH1s5I=
        DYoO0IASnkDXt4S9YXt_Bjbg9ZTRDXn4oSB6ikdbZHKruSJ7-HKgoYN9XH46d6PxdjpQLDOsY_Q=
        _Q4UAIWOIMSsZHgnYCGX-rexZfdC6uKb_f5hnC19vZoyBgmSfpL_ds19Vlg/42w/m5zulvL-Q6C=
        PvIEVLfb8IQ/h38/bMzh5OcOdU-ZvJKmSkqlxXl3vpiSmM7hsOf3ruK7Sww" target=3D"_bla=
        nk" rel=3D"noopener noreferrer nofollow">16B mixture of experts</a></b></sp=
        an><span style=3D""> model.</span></p></li><li class=3D"listItem ultext"><p=
         style=3D"padding:0px;text-align:left;word-break:break-word;"><span style=
        =3D""><b><a class=3D"link" href=3D"https://link.mail.beehiiv.com/ss/c/5J8WP=
        rGlKFK1BUsRYoWIfcXZPn7eFZuleVvLn7mT4Qt171msYQbusgxP_HQCoc85vB6nBhszX8CQUTCj=
        TXXGTfCqmA5Y9TAsez3raxRTXOkoxVy4kkBtQ4u_WNOnQC3R9a6AbeXRKP2qc-Jb4mX02vZnbAx=
        8FZkbamyT8TPA1j8S7QPKHIeDlwq5wqMUyODRlk12POf4TebXDkO2zpoKrdVRtfFMXm_myCEFzg=
        OOY3g/42w/m5zulvL-Q6CPvIEVLfb8IQ/h39/SEwj3hrJcRIwL5HEbIRy16iF43xZyxCBCgmqeu=
        oSklo" target=3D"_blank" rel=3D"noopener noreferrer nofollow">Build LLM app=
        s with Langchain</a></b></span><span style=3D""><b>=C2=A0</b></span><span s=
        tyle=3D"">- 1 hour course.</span></p></li><li class=3D"listItem ultext"><p =
        style=3D"padding:0px;text-align:left;word-break:break-word;"><span style=3D=
        ""><b><a class=3D"link" href=3D"https://link.mail.beehiiv.com/ss/c/5J8WPrGl=
        KFK1BUsRYoWIfXDlTIG9wrf4xTTlxvibdT12M7TbE2Ypx5-dlSObhJWLSdRFf27O6c_Il3-Ob2h=
        B5HE3RIRJd_Oe59zvjESbTvdsv-MWEzN-6f3DDuKReNEAAbdUi4gfM4xSsY67szqJmYgaX7HcQe=
        bdxCJU477Uee165pi3Hn6D82E7tHQ5_FrB/42w/m5zulvL-Q6CPvIEVLfb8IQ/h40/a7kPAV1hg=
        YbVKgzG61Toei9MNpL55QkyFyNmwVy4YyY" target=3D"_blank" rel=3D"noopener noref=
        errer nofollow">Live building an app</a></b></span><span style=3D""> with C=
        hatGPT during a podcast.</span></p></li><li class=3D"listItem ultext"><p st=
        yle=3D"padding:0px;text-align:left;word-break:break-word;"><span style=3D""=
        >A mere mortal&#39;s visual guide to AI </span><span style=3D""><b><a class=
        =3D"link" href=3D"https://link.mail.beehiiv.com/ss/c/3diHqBj_1e22cFpZjMeWvY=
        Flrvf2jHATGUWi0rs5d2WzU87aAGZ8URlFwvmv0OadbzDQOXvYzwzqWKir2A1BF6vTpz3RDPdcb=
        qhyN_WngfiXRt0EUJldakyVfzQCid4uE88Zcig5N3n0srSzTpQqatJkKLc9kz0yY1Krp05m-z-c=
        nfnrIf1-H45fvI5N8F1j/42w/m5zulvL-Q6CPvIEVLfb8IQ/h41/gUOUv1AYtX6W0de6N41bJbS=
        du_gFeOOrhoNLF6QVoQ4" target=3D"_blank" rel=3D"noopener noreferrer nofollow=
        ">vector embeddings.</a></b></span></p></li><li class=3D"listItem ultext"><=
        p style=3D"padding:0px;text-align:left;word-break:break-word;"><span style=
        =3D"">Notebooks and tutorials to </span><span style=3D""><b><a class=3D"lin=
        k" href=3D"https://link.mail.beehiiv.com/ss/c/5J8WPrGlKFK1BUsRYoWIfXDlTIG9w=
        rf4xTTlxvibdT0z4w8ZoZANG__nouOUTegzX80w3MHzAh1h6c6Wq2mASnfUhroYFO8AqACISsSm=
        kDeHZqdY1LfPubeYUqM4vnjcQPU4TLBi3v28ScGAnW1THFIfpEqRS81JlqD3J14sVkZExTkzoEF=
        Y9OHs4Jrdu-f2/42w/m5zulvL-Q6CPvIEVLfb8IQ/h42/QkicOz3IyZJ5utxGGa_3RInJRD0-4s=
        4Q6XE6j4Bjx5k" target=3D"_blank" rel=3D"noopener noreferrer nofollow">fine-=
        tune Phi-2</a></b></span><span style=3D""><b>=C2=A0</b></span><span style=
        =3D"">by Brev Dev.</span></p></li><li class=3D"listItem ultext"><p style=3D=
        "padding:0px;text-align:left;word-break:break-word;"><span style=3D"">Insta=
        ll </span><span style=3D""><b><a class=3D"link" href=3D"https://link.mail.b=
        eehiiv.com/ss/c/5J8WPrGlKFK1BUsRYoWIfR17fJEiXfaY3IrDXwMcUXbjnmlFtX8hh_U-hD2=
        qHDFvwCfR-vxsoKv_E6HXU-r07jgPR71_xSo9-snmsyz51vLj9VtTrtZi0vwt7XfI9WfEC-OPGv=
        XC3lUBXZPNTA8QOoSHbp88YR2NKkgJttVrsnM/42w/m5zulvL-Q6CPvIEVLfb8IQ/h43/Jah3Iu=
        HfMDNBO3a3GZ1sWZ-3LDtpDtpBAMUgmwLmKIY" target=3D"_blank" rel=3D"noopener no=
        referrer nofollow">Stable Diffusion XL locally on MacOS</a></b></span><span=
         style=3D""> and use it for free.</span></p></li></ul></div></td></tr><tr><=
        td class=3D"dd" align=3D"left" style=3D"padding:0px 25px;text-align:left;wo=
        rd-break:break-word;"><p><span style=3D""><a class=3D"link" href=3D"https:/=
        /link.mail.beehiiv.com/ss/c/Zbmry1EbCGgS3s0XZ11IPVy1Rxjcv3dTIA1-96P-ZbCf7cn=
        SF1S35d7G4WKjLyAmVb_BknMratnLPPSZMOHhwTSLEMw7M9PqVZlrU14LaXdkNUJ7BhO5bvySAI=
        G9S3wtNNlK0s7i_UdM0LDaQlaGLfXrICkJ492FPmlke29-wkWbYkurWVuKlbY5wruBu_On/42w/=
        m5zulvL-Q6CPvIEVLfb8IQ/h44/LsmmR6x2XBVVtZO9yOy34gCZpPruq2Om1xp-GUYfnvY" tar=
        get=3D"_blank" rel=3D"noopener noreferrer nofollow">View more =E2=86=92</a>=
        </span></p></td></tr></table></td></tr></table></td></tr><tr><td align=3D"c=
        enter" valign=3D"top" style=3D"font-size:0px;line-height:0px;padding:20px 0=
        px;" class=3D"dd"><table class=3D"j" role=3D"none" width=3D"100%%" border=
        =3D"0" cellspacing=3D"0" cellpadding=3D"0" align=3D"center"><tr><td> &nbsp;=
         </td></tr></table></td></tr><tr><td><table role=3D"none" width=3D"100%" bo=
        rder=3D"0" cellspacing=3D"0" cellpadding=3D"0" style=3D""><tr><td bgcolor=
        =3D"transparent" style=3D"background-color:transparent;padding:0px 0px 0px =
        0px;"><table role=3D"none" width=3D"100%" border=3D"0" cellspacing=3D"0" ce=
        llpadding=3D"0"><tr><td class=3D"dd" align=3D"left" valign=3D"top" style=3D=
        "padding:0px 25px;text-align:left;"><h6><span style=3D"color:rgb(17, 119, 2=
        35);"><b>QUICK BITES</b></span></h6></td></tr><tr><td class=3D"dd" align=3D=
        "left" style=3D"padding:0px 25px;text-align:left;word-break:break-word;"><p=
        ><span style=3D"">OpenAI has launched the </span><span style=3D""><a class=
        =3D"link" href=3D"https://link.mail.beehiiv.com/ss/c/rT9_QVANPSStlLiPmeZYQa=
        WTflGnn3eTuiTSqonNTIXT2p4ACmCWEoTcsEdSHPWrtic2S8hK0pcJDMZr1umwG7sLYGlYwFm7D=
        gVvsTdEwL4tDqhVTGEHRMUB8E3vJnq_v6A0Wk89hleERYy0qWwX4F5pkCUC7L7rn_KPDiRuTfV6=
        sgB8IvBicQVTjSErglFd/42w/m5zulvL-Q6CPvIEVLfb8IQ/h45/4hXVa2R4CaUx7JWeintvbmU=
        XPKR15AnVTrtDwpaGg8w" target=3D"_blank" rel=3D"noopener noreferrer nofollow=
        ">GPT Store</a></span><span style=3D""> and </span><span style=3D""><a clas=
        s=3D"link" href=3D"https://link.mail.beehiiv.com/ss/c/rT9_QVANPSStlLiPmeZYQ=
        aWTflGnn3eTuiTSqonNTIVVd5jqVBI28FsrXwUXHSA9VofEIwz_HJvKEN32rwbSHo1hfw828zuG=
        xj5Lvks5zVKXxTPcCh9GfJnzEA40NRNcYB9Lv39mW8jwooLEhgLXzUjjb1Z4-nDGOE1z3UhkeCH=
        wuKlOrBx86oSxqsgSP4_Q/42w/m5zulvL-Q6CPvIEVLfb8IQ/h46/pN91EU1B7zjbRWD6Inz3Ak=
        xciMzZLStIJNJASHaSvqk" target=3D"_blank" rel=3D"noopener noreferrer nofollo=
        w">ChatGPT Team</a></span><span style=3D""> plan to expand access to large =
        language models for creators and businesses.</span></p></td></tr><tr><td cl=
        ass=3D"dd" align=3D"left" style=3D"padding:0px 25px;text-align:left;word-br=
        eak:break-word;"><p><span style=3D""><b>What is going on here?</b></span></=
        p></td></tr><tr><td class=3D"dd" align=3D"left" style=3D"padding:0px 25px;t=
        ext-align:left;word-break:break-word;"><p><span style=3D"">OpenAI has launc=
        hed the GPT store and a new Teams plan for ChatGPT subscriptions.</span></p=
        ></td></tr><tr><td align=3D"center" valign=3D"top" style=3D"padding: 2px 25=
        px 20px; " class=3D"dd"><table role=3D"none" border=3D"0" cellspacing=3D"0"=
         cellpadding=3D"0" style=3D"margin:0 auto 0 auto;"><tr><td align=3D"center"=
         valign=3D"top" style=3D"width:610px;"><img src=3D"https://media.beehiiv.co=
        m/cdn-cgi/image/fit=3Dscale-down,format=3Dauto,onerror=3Dredirect,quality=
        =3D80/uploads/asset/file/e2cc4de3-8390-4f08-a658-1da6505b6ab4/image.png?t=
        =3D1704970503" alt=3D"" height=3D"auto" width=3D"610" style=3D"display:bloc=
        k;width:100%;" border=3D"0"/></td></tr></table></td></tr><tr><td class=3D"d=
        d" align=3D"left" style=3D"padding:0px 25px;text-align:left;word-break:brea=
        k-word;"><p><span style=3D""><b>What does this mean?</b></span></p></td></t=
        r><tr><td class=3D"dd" align=3D"left" style=3D"padding:0px 25px;text-align:=
        left;word-break:break-word;"><p><span style=3D"">Reminder: 2 months back Op=
        enAI launched custom chatbots inside ChatGPT, calling them GPTs. These GPTs=
         can be shared publicly or have restricted access. </span></p></td></tr><tr=
        ><td class=3D"dd" align=3D"left" style=3D"padding:0px 25px;text-align:left;=
        word-break:break-word;"><p><span style=3D"">With the new GPT store, you can=
         find all public GPTs in a single place. OpenAI will highlight trending GPT=
        s and top GPTs for several categories every week. The big deal about the GP=
        T Store is the promised revenue share program but we gotta wait for more in=
        fo on that (not too much, OpenAI says rollout in Q1 2024).</span></p></td><=
        /tr><tr><td class=3D"dd" align=3D"left" style=3D"padding:0px 25px;text-alig=
        n:left;word-break:break-word;"><p><span style=3D"">ChatGPT Team is the new =
        plan on ChatGPT for shared workspaces where you can share chats, private GP=
        Ts and a dashboard to manage it all. It is pricier: $25/user/month if bille=
        d annually ($30 if monthly). You get more messages with GPT-4, longer conte=
        xt lengths and training on your data is default OFF. (a note: you can disab=
        le it on simple ChatGPT Plus too, it=E2=80=99s just on by default there)</s=
        pan></p></td></tr><tr><td class=3D"dd" align=3D"left" style=3D"padding:0px =
        25px;text-align:left;word-break:break-word;"><p><span style=3D""><b>Why sho=
        uld I care?</b></span></p></td></tr><tr><td class=3D"dd" align=3D"left" sty=
        le=3D"padding:0px 25px;text-align:left;word-break:break-word;"><p><span sty=
        le=3D"">Repeating Sam=E2=80=99s statement from Dev Day: GPTs are the first =
        step to agents or assistants that will do everything for you. And in that c=
        ase, chat does feel like the universal interface for interacting with agent=
        s. I find optimism in believing that this is an app store moment (and not t=
        he end of work </span>=F0=9F=98=85<span style=3D"">) and even if it is we h=
        ave a transition stage to cross. Also, more improvements in GPTs about lear=
        ning continuously, and getting more personalized are </span><span style=3D"=
        "><a class=3D"link" href=3D"https://link.mail.beehiiv.com/ss/c/znicDlvJFyGB=
        hcMAVWxZFoFoIorEq8cxTI-h0diLv_ulagZwz1FH0mA3WpIryGhbfV59HzrS4bdMd0sHj2JYoys=
        jU3yodSfBH5Gfols6fNACDZWiKpMo1mQxpi4EDV-esUD5NHX2tYe_YA_lewrCRa49IjwusOcWDq=
        MKjOKGDgEp6eSMjKHuwMPUMNBYPDYm/42w/m5zulvL-Q6CPvIEVLfb8IQ/h47/LEHinfHNhVYFJ=
        GdQgK91v5nQB-LQygv7t_Vrd2zHWSk" target=3D"_blank" rel=3D"noopener noreferre=
        r nofollow">also underway.</a></span><span style=3D""> So, get building.</s=
        pan></p></td></tr><tr><td class=3D"dd" align=3D"left" style=3D"padding:0px =
        25px;text-align:left;word-break:break-word;"><p><span style=3D""><a class=
        =3D"link" href=3D"https://link.mail.beehiiv.com/ss/c/2mEwMjuR9Ftp1uNMjV2BI_=
        kqa2wExC8tngdDHNC2L8CXeaVsw7UntwHpdntkzzGbIByLxqyF7JsOtuo60JZIkFLwTFKgRdoDa=
        FrSyOTHFTCuoJqOJuE6dM0U7tbm3FddJQaIBsi55uwkT0pl0Hm7_ynYw2xCiA1UgZfnx8fnyweh=
        yOYYbm_AIrLbikqBQWTRotgUwDiE4wkF-ocPoCct6yqIG-uoMfNuxaumuNI2Oa_cSttciBI83hv=
        SEnr6Fc-jXnqpdWedQvPkeQt-crXCL3A35Eo6b1R1qV7nPwtj64--oSvZnGe6A034eRxivaIMxU=
        e_DKEI2UsU_uNsSVC0TWrlIp1hwrZS4NwEyjVmYG6aWU3cgLQXrZQ0YQYRDlnV7pJBix-BNHjpK=
        Wva_Bul64kDffjA-djUoUf6rtphCyouuUyVmOdev5J4dw1tu3YQEUEr3aDPjLCfDzRLbP-mUM7O=
        b4Z4P8bFgh9RkHsqQ6bjhf8TOIV7tleaYPrDoAyRm4j9i2ceHrar-7pP5QmOmik5X1VoXnnHbL5=
        __wKMeF3AmInc5a-bUmZlcMurD0OsNJ3ckyBI6EnrEXY59FTexz6DeFcvqPGylu1O-dRdiN8/42=
        w/m5zulvL-Q6CPvIEVLfb8IQ/h48/c-V8iPTtmC63XfdwXJnx34UOn4-jirLU_vp9WRkxbJE" t=
        arget=3D"_blank" rel=3D"noopener noreferrer nofollow"><i>Share this story</=
        i></a></span></p></td></tr></table></td></tr></table></td></tr><tr><td alig=
        n=3D"center" valign=3D"top" style=3D"font-size:0px;line-height:0px;padding:=
        20px 0px;" class=3D"dd"><table class=3D"j" role=3D"none" width=3D"100%%" bo=
        rder=3D"0" cellspacing=3D"0" cellpadding=3D"0" align=3D"center"><tr><td> &n=
        bsp; </td></tr></table></td></tr><tr><td><table role=3D"none" width=3D"100%=
        " border=3D"0" cellspacing=3D"0" cellpadding=3D"0" style=3D""><tr><td bgcol=
        or=3D"transparent" style=3D"background-color:transparent;padding:0px 0px 0p=
        x 0px;"><table role=3D"none" width=3D"100%" border=3D"0" cellspacing=3D"0" =
        cellpadding=3D"0"><tr><td class=3D"dd" align=3D"left" valign=3D"top" style=
        =3D"padding:0px 25px;text-align:left;"><h3><span style=3D"">Ben=E2=80=99s B=
        ites Insights</span></h3></td></tr><tr><td class=3D"dd" align=3D"left" styl=
        e=3D"padding:0px 25px;text-align:left;word-break:break-word;"><p><span styl=
        e=3D"">We have 2 databases that are updated daily which you can access by s=
        haring Ben=E2=80=99s Bites using the link below;</span></p></td></tr><tr><t=
        d style=3D"padding-bottom:10px;padding-left:25px;padding-right:25px;padding=
        -top:0px;" class=3D"ee"><div style=3D"margin-left:0px;" class=3D"edm_outloo=
        klist"><ul style=3D"list-style-type:disc;margin:0px 0px;padding:0px 0px 0px=
         0px;"><li class=3D"listItem ultext"><p style=3D"padding:0px;text-align:lef=
        t;word-break:break-word;"><span style=3D""><b>All 10k+ links</b></span><spa=
        n style=3D""> we=E2=80=99ve covered, easily filterable (1 referral)</span><=
        /p></li><li class=3D"listItem ultext"><p style=3D"padding:0px;text-align:le=
        ft;word-break:break-word;"><span style=3D""><b>6k+ AI company funding round=
        s</b></span><span style=3D""> from Jan 2022, including investors, amounts, =
        stage etc (3 referrals)</span></p></li></ul></div></td></tr><tr><td align=
        =3D"center" valign=3D"top"><table role=3D"none" width=3D"100%" border=3D"0"=
         cellspacing=3D"0" cellpadding=3D"0" align=3D"center"><tr><td align=3D"cent=
        er" valign=3D"top" style=3D"font-size:0px;line-height:0px;padding:20px 0px;=
        " class=3D"dd"><table class=3D"j" role=3D"none" width=3D"100%%" border=3D"0=
        " cellspacing=3D"0" cellpadding=3D"0" align=3D"center"><tr><td> &nbsp; </td=
        ></tr></table></td></tr><tr><td class=3D"dd" align=3D"left" valign=3D"top" =
        style=3D"padding:0px 25px;text-align:left;"><h2>Share Ben&#39;s Bites</h2><=
        /td></tr><tr><td class=3D"dd" align=3D"left" style=3D"padding:0px 25px;text=
        -align:left;word-break:break-word;"><p> You currently have <strong>1</stron=
        g> referral, only <strong>2</strong> away from receiving <strong>AI Funding=
         Rounds</strong>. </p></td></tr><tr><td align=3D"left" valign=3D"top" style=
        =3D"padding: 2px 25px 20px; " class=3D"dd"><table role=3D"none" border=3D"0=
        " cellspacing=3D"0" cellpadding=3D"0" style=3D"margin:0 auto 0 0;"><tr><td =
        align=3D"center" valign=3D"top" style=3D"width:305px;"><a href=3D"https://l=
        ink.mail.beehiiv.com/ss/c/2mEwMjuR9Ftp1uNMjV2BI_kqa2wExC8tngdDHNC2L8ChfELre=
        u1Bi4IVyGfiq33vKNChPg74TOMXKWTanPEAaYo4gIajiylrIMp6du2Qxz68LmkeNaACwwTRO6Oz=
        mQk_i7Jjk0B-VkhBx-muKcczhXmyNKw_Ki-OqSxemP8rGEoEclA7ks1_WFsQHdTbbplNlN3SV2W=
        pdeGDppbVmshVNjHCOo5qTtjbR1sd7QP-VCQ19h2zIHUk2nfWnNL6rTfX6_77kBYJDCMe6dVajZ=
        ouTUL5gGpDd_QVRFGiKThV7BMradqzaM9s5t8g6McSRqu0WtPg7TSVwloK0xATYwm1VdoKw4Kmh=
        2DeCG5i35FjjxOrMFf_0grPQR2pEmEKqOrA-v4VTXTHMBdi_roFmgZNoNighoam1kf2cBikXqti=
        6EnLqtzDT8BWvw9KpHrIvDLynEuBnm5dC28KN7tkCg21-g/42w/m5zulvL-Q6CPvIEVLfb8IQ/h=
        49/gMfNV5NSehxkrTT3nBtdcYvplNDVGlRVtOx1FaCllso" rel=3D"noopener noreferrer =
        nofollow" style=3D"text-decoration:none;" target=3D"_blank"><img src=3D"htt=
        ps://media.beehiiv.com/cdn-cgi/image/fit=3Dscale-down,format=3Dauto,onerror=
        =3Dredirect,quality=3D80/uploads/reward/image/79da215a-9efc-48e2-9469-34e25=
        ac61350/Funding_Rounds.png" alt=3D"AI Funding Rounds" height=3D"auto" width=
        =3D"305" style=3D"display:block;width:100%;" border=3D"0"/></a></td></tr></=
        table></td></tr><tr><td align=3D"left" valign=3D"top" style=3D"padding-bott=
        om:14px;padding-left:25px;padding-right:25px;padding-top:14px;text-align:le=
        ft;width:100%;word-break:break-word;" class=3D"dd"><table role=3D"none" bor=
        der=3D"0" cellspacing=3D"0" cellpadding=3D"0" align=3D"left"><tr><td class=
        =3D"v" align=3D"center" valign=3D"middle" height=3D"42" style=3D"height:42p=
        x;"><a href=3D"https://link.mail.beehiiv.com/ss/c/2mEwMjuR9Ftp1uNMjV2BI_kqa=
        2wExC8tngdDHNC2L8ChfELreu1Bi4IVyGfiq33vKNChPg74TOMXKWTanPEAaYo4gIajiylrIMp6=
        du2Qxz68LmkeNaACwwTRO6OzmQk_i7Jjk0B-VkhBx-muKcczhXmyNKw_Ki-OqSxemP8rGEoEclA=
        7ks1_WFsQHdTbbplNlN3SV2WpdeGDppbVmshVNjHCOo5qTtjbR1sd7QP-VCQ19h2zIHUk2nfWnN=
        L6rTfX6_77kBYJDCMe6dVajZouTUL5gGpDd_QVRFGiKThV7BMradqzaM9s5t8g6McSRqu0WtPg7=
        TSVwloK0xATYwm1VdoKw4Kmh2DeCG5i35FjjxOrMFf_0grPQR2pEmEKqOrA-v4VTXTHMBdi_roF=
        mgZNoNighoam1kf2cBikXqti6EnLqtzDT8BWvw9KpHrIvDLynEuBnm5dC28KN7tkCg21-g/42w/=
        m5zulvL-Q6CPvIEVLfb8IQ/h50/K7ygCacYJm0j3nR6KQebQDs87z-OmNZ395uS3ennPAs" tar=
        get=3D"_blank" rel=3D"noopener noreferrer nofollow" style=3D"color:#FFFFFF;=
        font-size:18px;padding:0px 14px;text-decoration:none;"> Click to Share </a>=
        </td></tr></table></td></tr><tr><td class=3D"dd" align=3D"left" style=3D"pa=
        dding:0px 25px;text-align:left;word-break:break-word;"><p> Or copy and past=
        e this link to others: <a class=3D"link" href=3D"https://bensbites.beehiiv.=
        com/subscribe?ref=3DNE6k4RTSy3" target=3D"_blank" rel=3D"noopener noreferre=
        r nofollow" clicktracking=3D"off">https://bensbites.beehiiv.com/subscribe?r=
        ef=3DNE6k4RTSy3</a></p></td></tr><tr><td align=3D"center" valign=3D"top" st=
        yle=3D"font-size:0px;line-height:0px;padding:20px 0px;" class=3D"dd"><table=
         class=3D"j" role=3D"none" width=3D"100%%" border=3D"0" cellspacing=3D"0" c=
        ellpadding=3D"0" align=3D"center"><tr><td> &nbsp; </td></tr></table></td></=
        tr></table></td></tr></table></td></tr></table></td></tr><tr><td class=3D"d=
        d" align=3D"left" style=3D"padding:0px 25px;text-align:left;word-break:brea=
        k-word;"><p></p></td></tr></table></td></tr><tr><td class=3D"b" align=3D"ce=
        nter" valign=3D"top" bgcolor=3D"#ffffff" style=3D"padding:0px;border-bottom=
        -left-radius:0px;border-bottom-right-radius:0px;"><table role=3D"none" widt=
        h=3D"100%" border=3D"0" cellspacing=3D"0" cellpadding=3D"0" align=3D"center=
        "><tr><td align=3D"center" valign=3D"top" bgcolor=3D"#24292f" style=3D"padd=
        ing:12px"><table role=3D"none" width=3D"100%" border=3D"0" cellspacing=3D"0=
        " cellpadding=3D"0" align=3D"center"><tr><td><span style=3D"padding-left:1p=
        x;"></span></td><td align=3D"center" valign=3D"middle" width=3D"75" style=
        =3D"width:75px;"><a href=3D"https://link.mail.beehiiv.com/ss/c/5J8WPrGlKFK1=
        BUsRYoWIfZgV1kWRHeKIiVq12x2CNSOLJ_7qykGFtsccYhOUEh6QkMdnV22lbw8SWBAlrvolhl4=
        xh1u7I8tSgLJ5W_4GfbHpqORCNTDhwkVi-zXqv1xEMoscR3bfeivCnABhuv6TXJWMmBJ3nsXZe_=
        F-Z7KapvDhL9lt3ViufrnF1PSMKfJ-/42w/m5zulvL-Q6CPvIEVLfb8IQ/h51/_1hIYmzio9HX3=
        YiU4w6JJiWpCcc4vmMf6B8csqgqJcg" style=3D"text-decoration:none;"><img width=
        =3D"22" alt=3D"fb" border=3D"0" style=3D"display:block;max-width:22px;" src=
        =3D"https://media.beehiiv.com/cdn-cgi/image/fit=3Dscale-down,format=3Dauto,=
        onerror=3Dredirect,quality=3D80/static_assets/facebook_light.png"/></a></td=
        ><td align=3D"center" valign=3D"middle" width=3D"75" style=3D"width:75px;">=
        <a href=3D"https://link.mail.beehiiv.com/ss/c/znicDlvJFyGBhcMAVWxZFnJybPJ85=
        7pQxDkkXFcs9iWfq5CDh1sGN3f1e8Uu5rI1n3g07h4kMrfXzns1loPHPtFk04TCWUeCg1iUfcpo=
        Kv52bCVekgdCZcSxhxkxYjQPUnKHbUSW27y8ArS-dqHmRPCPtjOfAzeNiDCvA6eIL7g/42w/m5z=
        ulvL-Q6CPvIEVLfb8IQ/h52/cuGRccOeH0IuXnMkCh8lm6vW7DZBZvMIb-KZqc-AGpk" style=
        =3D"text-decoration:none;"><img width=3D"22" alt=3D"tw" border=3D"0" style=
        =3D"display:block;max-width:22px;" src=3D"https://media.beehiiv.com/cdn-cgi=
        /image/fit=3Dscale-down,format=3Dauto,onerror=3Dredirect,quality=3D80/stati=
        c_assets/x_light.png"/></a></td><td align=3D"center" valign=3D"middle" widt=
        h=3D"75" style=3D"width:75px;"><a href=3D"https://link.mail.beehiiv.com/ss/=
        c/5J8WPrGlKFK1BUsRYoWIfdkestMOJ8slswm66iS3RDz_J0SeaU6O7oBMmJMbmxRuk2Pdg6fPm=
        BnWQy5ghtNvK2KWcCsDRAp-5NJfj5FPCDTok1r9GVL4EswDaKqqg_WIzcs3a7CgE3kHbyvblm9j=
        FqG4Wex2pS051_CoNPOLxlA59K7NOnU1ADVeZ6D5B7nL/42w/m5zulvL-Q6CPvIEVLfb8IQ/h53=
        /H70QItNk0ht6wYrAAzqu2rnKB8fIgByAVZEEkpgTgV8" style=3D"text-decoration:none=
        ;"><img width=3D"22" alt=3D"ig" border=3D"0" style=3D"display:block;max-wid=
        th:22px;" src=3D"https://media.beehiiv.com/cdn-cgi/image/fit=3Dscale-down,f=
        ormat=3Dauto,onerror=3Dredirect,quality=3D80/static_assets/instagram_light.=
        png"/></a></td><td align=3D"center" valign=3D"middle" width=3D"75" style=3D=
        "width:75px;"><a href=3D"https://link.mail.beehiiv.com/ss/c/5J8WPrGlKFK1BUs=
        RYoWIfVN2DD3HzmtkLGNqn0AK9pr2pgW_zwKARsA2lQV2oLa70_6GeoZ4Mb5OTZ8-6YhTY0t871=
        de-Yw_KTn3FwE6ks3L7X2wfgRD6hw53oMXm0ieCCcpUpVMAPVpnpe6g0FGymsg4ZdLhK7brUSWl=
        lOipQwCx3EJPtQczC4OAqOuIMFm/42w/m5zulvL-Q6CPvIEVLfb8IQ/h54/Lqn9WTy_Fpa1k-vD=
        bevCoquZ7ShbwOGH1ser9IhwGj0" style=3D"text-decoration:none;"><img width=3D"=
        22" alt=3D"in" border=3D"0" style=3D"display:block;max-width:22px;" src=3D"=
        https://media.beehiiv.com/cdn-cgi/image/fit=3Dscale-down,format=3Dauto,oner=
        ror=3Dredirect,quality=3D80/static_assets/linkedin_light.png"/></a></td><td=
        ><span style=3D"padding-left:1px;"></span></td></tr></table></td></tr><tr><=
        td height=3D"10" style=3D"line-height:1px;font-size:1px;height:10px;"> &nbs=
        p; </td></tr><tr><td class=3D"w" align=3D"center" valign=3D"top" style=3D"p=
        adding:50px;"><table role=3D"none" width=3D"100%" border=3D"0" cellspacing=
        =3D"0" cellpadding=3D"0" align=3D"center"><tr><td align=3D"center" valign=
        =3D"top"><p style=3D"font-family:'Roboto',-apple-system,BlinkMacSystemFont,=
        Tahoma,sans-serif;color:#24292f!important;"> Update your email preferences =
        or unsubscribe <a class=3D"link" href=3D"https://link.mail.beehiiv.com/ss/c=
        /2mEwMjuR9Ftp1uNMjV2BI_kqa2wExC8tngdDHNC2L8ChfELreu1Bi4IVyGfiq33vKNChPg74TO=
        MXKWTanPEAaYo4gIajiylrIMp6du2Qxz6W0acNQ7rzxe7tZgkNhMThiRk9kGaf7kyVehKrV7gDN=
        yOThHf0DHtLejVR2Cqa1SozLTOuhZqCNQl2FjxjWAdll0y1rNWQc_wxouCFcp9DE_HgFCCLoz7K=
        NEDLpniHPemgFbT1WAtsyyiPWJbISu2lHDvwhb4dmsQ5qQ5PHO_CEcFwtst09ebmbMFtOzlPfE6=
        6gYy8tgIeWuJS3vWxVxfo9vok66dG67O596LaJEhOFf1HBweu0b_EbOohcaolTc7BIPYrqbbAz4=
        pKleCpnlMOrKj3h5FGqHQwJwBrdKZcfyOv2UXKtEHiFHLJ72D7TmbAuKp8PpW1-q_imV_VB8q4o=
        LqW-u736TZFwQVdaQIndWX30y2gMruvCzD6unxFsesKi_IabqZIFkYwJKljfzwJHGU4872vCfmt=
        9MpYylnglk4gvgSzSyBQPcr44LQq9yBIrNKRj2rpoP9iF24r75AH2_AhJYrsP9aCzxzPHIpJspz=
        MH8-o_d1GY2ue3VbU820jYcC5sfE983AWLh67-KxmadjIwk2fUgNv6rE4B_9zdGgRHpAeki8UCN=
        J4q2zxl_bumESEba0mb56EqyAfWVE4/42w/m5zulvL-Q6CPvIEVLfb8IQ/h55/4X9qnmvguSUYF=
        CN7V42ZZiyXBsEZZkBZ-L7u3jDPF2c" style=3D"text-decoration:underline;text-dec=
        oration-color:#24292f!important;color:#24292f!important;"> here</a></p><p c=
        lass=3D"copyright" style=3D"font-family:'Roboto',-apple-system,BlinkMacSyst=
        emFont,Tahoma,sans-serif;color:#24292f!important;"> &copy; 2024 Ben&#39;s B=
        ites </p><p style=3D"font-family:'Roboto',-apple-system,BlinkMacSystemFont,=
        Tahoma,sans-serif;color:#24292f!important;"> 228 Park Ave S, #29976, New Yo=
        rk, New York 10003, United States </p></td></tr><tr style=3D"display: table=
        -row !important;"><td align=3D"center" valign=3D"top" style=3D"padding-top:=
        20px;" style=3D"display:table-cell !important;"><table role=3D"none" border=
        =3D"0" cellspacing=3D"0" cellpadding=3D"0" align=3D"center" style=3D"displa=
        y:table !important;"><tr style=3D"display:table-row !important;"><td class=
        =3D"u" align=3D"center" valign=3D"middle" height=3D"32" style=3D"height:32p=
        x;display:table-cell !important; max-height: 32px !important;margin:0px !im=
        portant;"><a style=3D"line-height:32px !important;text-decoration:none;disp=
        lay:block !important;" href=3D"https://link.mail.beehiiv.com/ss/c/5J8WPrGlK=
        FK1BUsRYoWIfQnuOPrT8xuGTvfar1YIaRl4uTTIa4UdTFW_u7WAq_P2-ezw5o99MJKLk16-s5Sj=
        O_fwctA4dW2Jrudfa_vrKmlXMU_5jLulINmnAyIotCpq9bY-nOLiqA_E7Wge9DmGhCZ0-jL-mXS=
        syvxNHhmjK8o/42w/m5zulvL-Q6CPvIEVLfb8IQ/h56/JCnMkD-1l2q0xkGg2-Q3yR43JikKT3b=
        gTHZbUeHxKy8"><img src=3D"https://media.beehiiv.com/output-onlinepngtools.p=
        ng" width=3D"16" alt=3D"beehiiv logo" style=3D"display:inline-block !import=
        ant;max-width:16px !important; vertical-align:-3px !important;width: 16px !=
        important;" border=3D"0"/><span style=3D"padding-left:11px !important;displ=
        ay: inline-block !important;">Powered by beehiiv</span></a></td></tr></tabl=
        e></td></tr></table></td></tr></table></td></tr></table></td></tr></table><=
        /td></tr></table></td></tr></table></div></body></html>
        --9c64ebd4eab8128392b853d9f3875eb733c6715758190c0dd5a2d2f7cddd--`
    );
    return NextResponse.json({ message: "excellent!", parsed });
  } catch (error) {
    console.error({ error });
    return NextResponse.json({ message: "failed" });
  }
}
