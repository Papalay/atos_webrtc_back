



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-01ab74aec1f88b10018cfd6b44beeaffca2792e0fbe73b31f078adb893dbaa1e.css" integrity="sha256-Aat0rsH4ixABjP1rRL7q/8onkuD75zsx8HituJPbqh4=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-858e99422872564c3086c6be001c3fe8be3e17d8ada5dd85827a12cdfb6de4b3.css" integrity="sha256-hY6ZQihyVkwwhsa+ABw/6L4+F9itpd2FgnoSzftt5LM=" media="all" rel="stylesheet" />
    
    
    
    

    <link as="script" href="https://assets-cdn.github.com/assets/frameworks-989d38f4923487cfd9bb7181fd4f1a7ae1c279f2a1318efe9c593f34de850870.js" rel="preload" />
    
    <link as="script" href="https://assets-cdn.github.com/assets/github-f83ae2f0d483dddc8f1894b3cc2709ff1db48511ddc8d054ed639c52c80d54c9.js" rel="preload" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>satellizer/satellizer.js at master · sahat/satellizer</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars2.githubusercontent.com/u/544954?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="sahat/satellizer" name="twitter:title" /><meta content="satellizer - Token-based AngularJS Authentication" name="twitter:description" />
      <meta content="https://avatars2.githubusercontent.com/u/544954?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="sahat/satellizer" property="og:title" /><meta content="https://github.com/sahat/satellizer" property="og:url" /><meta content="satellizer - Token-based AngularJS Authentication" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/MTc2NDcwMTk6NDczYTlkMDc5ZDEwZTI2ZDZjNWM4N2Q3NTMyOThiNjE6ZTdkOWU5ZGMzNzU5ZGQ0ZDc1MTAyMGY1MTI0NTc4NzA1Y2I5MDFiNTJlZTU4NGQ2NmI2YmE4MzlkMGU3YjJlYQ==--fb4f804c1b04157b8a70d8184bf8972f9f277836">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="D9734108:4DBB:E7B1A27:571DFC8C" name="octolytics-dimension-request_id" /><meta content="17647019" name="octolytics-actor-id" /><meta content="Papalay" name="octolytics-actor-login" /><meta content="0348bafdbaa9a0586cb701089d8e927aa6115f71286ec6108984193aeb2be0be" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged In">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="Papalay">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="YWUzZTcwMTcxZjcxOTQyYjk2NmJlNWE4N2Y1N2RkNmQ5NzJlYzM0YzJkYjJmNjY2NjExODU3ZTk3ZDFkOWVlNnx7InJlbW90ZV9hZGRyZXNzIjoiMjE3LjExNS42NS44IiwicmVxdWVzdF9pZCI6IkQ5NzM0MTA4OjREQkI6RTdCMUEyNzo1NzFERkM4QyIsInRpbWVzdGFtcCI6MTQ2MTU4Mjk4OX0=">


      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="d1b8132d35ea1a1d1bb00f7671d62cc98834d2eb" name="form-nonce" />

    <meta http-equiv="x-pjax-version" content="d5e82a43281b5635b17eeb3d50026938">
    

      
  <meta name="description" content="satellizer - Token-based AngularJS Authentication">
  <meta name="go-import" content="github.com/sahat/satellizer git https://github.com/sahat/satellizer.git">

  <meta content="544954" name="octolytics-dimension-user_id" /><meta content="sahat" name="octolytics-dimension-user_login" /><meta content="21486287" name="octolytics-dimension-repository_id" /><meta content="sahat/satellizer" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="21486287" name="octolytics-dimension-repository_network_root_id" /><meta content="sahat/satellizer" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/sahat/satellizer/commits/master.atom" rel="alternate" title="Recent Commits to satellizer:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/sahat/satellizer/blob/master/satellizer.js" data-pjax-transient>
  </head>


  <body class="logged-in   env-production windows vis-public page-blob">
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"></div>
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="28" version="1.1" viewBox="0 0 16 16" width="28"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59 0.4 0.07 0.55-0.17 0.55-0.38 0-0.19-0.01-0.82-0.01-1.49-2.01 0.37-2.53-0.49-2.69-0.94-0.09-0.23-0.48-0.94-0.82-1.13-0.28-0.15-0.68-0.52-0.01-0.53 0.63-0.01 1.08 0.58 1.23 0.82 0.72 1.21 1.87 0.87 2.33 0.66 0.07-0.52 0.28-0.87 0.51-1.07-1.78-0.2-3.64-0.89-3.64-3.95 0-0.87 0.31-1.59 0.82-2.15-0.08-0.2-0.36-1.02 0.08-2.12 0 0 0.67-0.21 2.2 0.82 0.64-0.18 1.32-0.27 2-0.27 0.68 0 1.36 0.09 2 0.27 1.53-1.04 2.2-0.82 2.2-0.82 0.44 1.1 0.16 1.92 0.08 2.12 0.51 0.56 0.82 1.27 0.82 2.15 0 3.07-1.87 3.75-3.65 3.95 0.29 0.25 0.54 0.73 0.54 1.48 0 1.07-0.01 1.93-0.01 2.2 0 0.21 0.15 0.46 0.55 0.38C13.71 14.53 16 11.53 16 8 16 3.58 12.42 0 8 0z"></path></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/sahat/satellizer/search" class="js-site-search-form" data-scoped-search-url="/sahat/satellizer/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        tabindex="1"
        autocapitalize="off">
    </label>
</form></div>


      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
    

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"></path></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="sahat/satellizer">This repository</span>
  </div>
    <a class="dropdown-item" href="/sahat/satellizer/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/Papalay"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@Papalay" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/17647019?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu  dropdown-menu-sw">
        <div class=" dropdown-header header-nav-current-user css-truncate">
            Signed in as <strong class="css-truncate-target">Papalay</strong>

        </div>


        <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/Papalay" data-ga-click="Header, go to profile, text:your profile">
            Your profile
          </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
          <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
            Explore
          </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>


          <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
            Settings
          </a>

          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="d1b8132d35ea1a1d1bb00f7671d62cc98834d2eb" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="5XaJtwQMIzluSo+/OYiQrG4+ODaMU05aILXUCVgMg81DHsFXDul1iooqjSo/IKTGh27kzexrDHBJvQYSpISQWQ==" /></div>
            <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
              Sign out
            </button>
</form>
      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>


      


    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="d1b8132d35ea1a1d1bb00f7671d62cc98834d2eb" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="cdQwQgV4/9eoxWMMpJ83vzyKU4r3in656szjnygNCf926OPiJHYU74AMsqL3Zs58Ox/ayQa61gfC9iSn/DNZwA==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="21486287" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/sahat/satellizer/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6c4.94 0 7.94-6 7.94-6S13 2 8.06 2z m-0.06 10c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4z m2-4c0 1.11-0.89 2-2 2s-2-0.89-2-2 0.89-2 2-2 2 0.89 2 2z"></path></svg>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count" href="/sahat/satellizer/watchers">
            271
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6c4.94 0 7.94-6 7.94-6S13 2 8.06 2z m-0.06 10c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4z m2-4c0 1.11-0.89 2-2 2s-2-0.89-2-2 0.89-2 2-2 2 0.89 2 2z"></path></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6c4.94 0 7.94-6 7.94-6S13 2 8.06 2z m-0.06 10c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4z m2-4c0 1.11-0.89 2-2 2s-2-0.89-2-2 0.89-2 2-2 2 0.89 2 2z"></path></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8 2.81v10.38c0 0.67-0.81 1-1.28 0.53L3 10H1c-0.55 0-1-0.45-1-1V7c0-0.55 0.45-1 1-1h2l3.72-3.72c0.47-0.47 1.28-0.14 1.28 0.53z m7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06 1.97 1.97-1.97 1.97 1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06-1.97-1.97 1.97-1.97z"></path></svg>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/sahat/satellizer/unstar" class="js-toggler-form starred" data-form-nonce="d1b8132d35ea1a1d1bb00f7671d62cc98834d2eb" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="JSOFaQvfJUKSEoAVffR7ex4ualkH1AFZ/GMCUutl6LhV1xcLgHU77wTbHQhkYWK1Kz87YYHIsIuXvlqg/PfZ6w==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar sahat/satellizer"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-0.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14l4.33-2.33 4.33 2.33L10.4 9.26 14 6z"></path></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/sahat/satellizer/stargazers">
          6,845
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/sahat/satellizer/star" class="js-toggler-form unstarred" data-form-nonce="d1b8132d35ea1a1d1bb00f7671d62cc98834d2eb" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="q2HHGWdIDSGLJCyw5YuiFgSjLnxK7uBGYBYtuxIhKfbSl5ZjQN1IkCIRhndYbC5fOYGJot6TNAXuU0Rj0liIfg==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star sahat/satellizer"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-0.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14l4.33-2.33 4.33 2.33L10.4 9.26 14 6z"></path></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/sahat/satellizer/stargazers">
          6,845
        </a>
</form>  </div>

  </li>

  <li>
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/sahat/satellizer/fork" class="btn-with-count" data-form-nonce="d1b8132d35ea1a1d1bb00f7671d62cc98834d2eb" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="zDHPEfja4s43DxCqxkXO/Dzh/aySMvDdRqej4tgP3CpG+dvzuFCOjRJm0Ov7zLd21/viBSGBdPrnpK1MG+kzJw==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of sahat/satellizer to your account"
                aria-label="Fork your own copy of sahat/satellizer to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path d="M8 1c-1.11 0-2 0.89-2 2 0 0.73 0.41 1.38 1 1.72v1.28L5 8 3 6v-1.28c0.59-0.34 1-0.98 1-1.72 0-1.11-0.89-2-2-2S0 1.89 0 3c0 0.73 0.41 1.38 1 1.72v1.78l3 3v1.78c-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72V9.5l3-3V4.72c0.59-0.34 1-0.98 1-1.72 0-1.11-0.89-2-2-2zM2 4.2c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z m3 10c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z m3-10c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z"></path></svg>
              Fork
            </button>
</form>
    <a href="/sahat/satellizer/network" class="social-count">
      939
    </a>
  </li>
</ul>

    <h1 class="entry-title public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M4 9h-1v-1h1v1z m0-3h-1v1h1v-1z m0-2h-1v1h1v-1z m0-2h-1v1h1v-1z m8-1v12c0 0.55-0.45 1-1 1H6v2l-1.5-1.5-1.5 1.5V14H1c-0.55 0-1-0.45-1-1V1C0 0.45 0.45 0 1 0h10c0.55 0 1 0.45 1 1z m-1 10H1v2h2v-1h3v1h5V11z m0-10H2v9h9V1z"></path></svg>
  <span class="author" itemprop="author"><a href="/sahat" class="url fn" rel="author">sahat</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/sahat/satellizer" data-pjax="#js-repo-pjax-container">satellizer</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/sahat/satellizer" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /sahat/satellizer" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M9.5 3l-1.5 1.5 3.5 3.5L8 11.5l1.5 1.5 4.5-5L9.5 3zM4.5 3L0 8l4.5 5 1.5-1.5L2.5 8l3.5-3.5L4.5 3z"></path></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/sahat/satellizer/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /sahat/satellizer/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7S10.14 13.7 7 13.7 1.3 11.14 1.3 8s2.56-5.7 5.7-5.7m0-1.3C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7S10.86 1 7 1z m1 3H6v5h2V4z m0 6H6v2h2V10z"></path></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">131</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/sahat/satellizer/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /sahat/satellizer/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 11.28c0-1.73 0-6.28 0-6.28-0.03-0.78-0.34-1.47-0.94-2.06s-1.28-0.91-2.06-0.94c0 0-1.02 0-1 0V0L4 3l3 3V4h1c0.27 0.02 0.48 0.11 0.69 0.31s0.3 0.42 0.31 0.69v6.28c-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72z m-1 2.92c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2zM4 3c0-1.11-0.89-2-2-2S0 1.89 0 3c0 0.73 0.41 1.38 1 1.72 0 1.55 0 5.56 0 6.56-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72V4.72c0.59-0.34 1-0.98 1-1.72z m-0.8 10c0 0.66-0.55 1.2-1.2 1.2s-1.2-0.55-1.2-1.2 0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2z m-1.2-8.8c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z"></path></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">5</span>
      <meta itemprop="position" content="3">
</a>  </span>



  <a href="/sahat/satellizer/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /sahat/satellizer/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0V10h3.6L4.5 8.2l0.9 5.4L9 8.5l1.6 1.5H14V8H11.5z"></path></svg>
    Pulse
</a>
  <a href="/sahat/satellizer/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /sahat/satellizer/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M16 14v1H0V0h1v14h15z m-11-1H3V8h2v5z m4 0H7V3h2v10z m4 0H11V6h2v7z"></path></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/sahat/satellizer/blob/8799f1e875e85f9d2eddfb237d48de2e895b6580/satellizer.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:06a393ffa95fa1b15171a9d438dfe023 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/sahat/satellizer/blob/angular2/satellizer.js"
               data-name="angular2"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="angular2">
                angular2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/sahat/satellizer/blob/master/satellizer.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/sahat/satellizer/blob/typescript/satellizer.js"
               data-name="typescript"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="typescript">
                typescript
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.14.0/satellizer.js"
              data-name="0.14.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.14.0">
                0.14.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.13.4/satellizer.js"
              data-name="0.13.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.13.4">
                0.13.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.13.3/satellizer.js"
              data-name="0.13.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.13.3">
                0.13.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.13.2/satellizer.js"
              data-name="0.13.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.13.2">
                0.13.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.13.1/satellizer.js"
              data-name="0.13.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.13.1">
                0.13.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.13.0/satellizer.js"
              data-name="0.13.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.13.0">
                0.13.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.12.5/satellizer.js"
              data-name="0.12.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.12.5">
                0.12.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.12.4/satellizer.js"
              data-name="0.12.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.12.4">
                0.12.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.12.3/satellizer.js"
              data-name="0.12.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.12.3">
                0.12.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.12.2/satellizer.js"
              data-name="0.12.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.12.2">
                0.12.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.12.1/satellizer.js"
              data-name="0.12.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.12.1">
                0.12.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.12.0/satellizer.js"
              data-name="0.12.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.12.0">
                0.12.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.11.3/satellizer.js"
              data-name="0.11.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.11.3">
                0.11.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.11.2/satellizer.js"
              data-name="0.11.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.11.2">
                0.11.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.11.1/satellizer.js"
              data-name="0.11.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.11.1">
                0.11.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.11.0/satellizer.js"
              data-name="0.11.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.11.0">
                0.11.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.10.1/satellizer.js"
              data-name="0.10.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.10.1">
                0.10.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.10/satellizer.js"
              data-name="0.10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.10">
                0.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.9.4/satellizer.js"
              data-name="0.9.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.9.4">
                0.9.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.9.3/satellizer.js"
              data-name="0.9.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.9.3">
                0.9.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.9.2/satellizer.js"
              data-name="0.9.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.9.2">
                0.9.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.9.1/satellizer.js"
              data-name="0.9.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.9.1">
                0.9.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.9.0/satellizer.js"
              data-name="0.9.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.9.0">
                0.9.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.8.8/satellizer.js"
              data-name="0.8.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.8.8">
                0.8.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.8.7/satellizer.js"
              data-name="0.8.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.8.7">
                0.8.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.8.6/satellizer.js"
              data-name="0.8.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.8.6">
                0.8.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.8.5/satellizer.js"
              data-name="0.8.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.8.5">
                0.8.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.8.4/satellizer.js"
              data-name="0.8.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.8.4">
                0.8.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.8.3/satellizer.js"
              data-name="0.8.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.8.3">
                0.8.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.8.2/satellizer.js"
              data-name="0.8.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.8.2">
                0.8.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.8.1/satellizer.js"
              data-name="0.8.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.8.1">
                0.8.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.8.0/satellizer.js"
              data-name="0.8.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.8.0">
                0.8.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.7.1/satellizer.js"
              data-name="0.7.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.7.1">
                0.7.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.7.0/satellizer.js"
              data-name="0.7.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.7.0">
                0.7.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.6.4/satellizer.js"
              data-name="0.6.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.6.4">
                0.6.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.6.3/satellizer.js"
              data-name="0.6.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.6.3">
                0.6.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.6.2/satellizer.js"
              data-name="0.6.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.6.2">
                0.6.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.6.1/satellizer.js"
              data-name="0.6.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.6.1">
                0.6.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.6.0/satellizer.js"
              data-name="0.6.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.6.0">
                0.6.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.5.0/satellizer.js"
              data-name="0.5.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.5.0">
                0.5.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.4.1/satellizer.js"
              data-name="0.4.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.4.1">
                0.4.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.4.0/satellizer.js"
              data-name="0.4.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.4.0">
                0.4.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.3.4/satellizer.js"
              data-name="0.3.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.3.4">
                0.3.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.3.3/satellizer.js"
              data-name="0.3.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.3.3">
                0.3.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.3.2/satellizer.js"
              data-name="0.3.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.3.2">
                0.3.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.3.1/satellizer.js"
              data-name="0.3.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.3.1">
                0.3.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.3.0/satellizer.js"
              data-name="0.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.3.0">
                0.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/sahat/satellizer/tree/0.2.0/satellizer.js"
              data-name="0.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.2.0">
                0.2.0
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/sahat/satellizer/find/master"
          class="js-pjax-capture-input btn btn-sm"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/sahat/satellizer"><span>satellizer</span></a></span></span><span class="separator">/</span><strong class="final-path">satellizer.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="right">
        <a class="commit-tease-sha" href="/sahat/satellizer/commit/3408b2bc059ae609bc07876024ee6d11dbcc5db1" data-pjax>
          3408b2b
        </a>
        <time datetime="2016-04-10T06:53:47Z" is="relative-time">Apr 10, 2016</time>
      </span>
      <div>
        <img alt="@indieforger" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/10958238?v=3&amp;s=40" width="20" />
        <a href="/indieforger" class="user-mention" rel="contributor">indieforger</a>
          <a href="/sahat/satellizer/commit/3408b2bc059ae609bc07876024ee6d11dbcc5db1" class="message" data-pjax="true" title="trailing link removed from unlink endpoint">trailing link removed from unlink endpoint</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>52</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="sahat" href="/sahat/satellizer/commits/master/satellizer.js?author=sahat"><img alt="@sahat" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/544954?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="TheOneTheOnlyDavidBrown" href="/sahat/satellizer/commits/master/satellizer.js?author=TheOneTheOnlyDavidBrown"><img alt="@TheOneTheOnlyDavidBrown" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/1423875?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="cridenour" href="/sahat/satellizer/commits/master/satellizer.js?author=cridenour"><img alt="@cridenour" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/175568?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="krystalcode" href="/sahat/satellizer/commits/master/satellizer.js?author=krystalcode"><img alt="@krystalcode" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/301364?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="niemyjski" href="/sahat/satellizer/commits/master/satellizer.js?author=niemyjski"><img alt="@niemyjski" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/1020579?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="viniciusdacal" href="/sahat/satellizer/commits/master/satellizer.js?author=viniciusdacal"><img alt="@viniciusdacal" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/2660570?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="amullins83" href="/sahat/satellizer/commits/master/satellizer.js?author=amullins83"><img alt="@amullins83" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/199260?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="tymondesigns" href="/sahat/satellizer/commits/master/satellizer.js?author=tymondesigns"><img alt="@tymondesigns" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/1801923?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="sfwc" href="/sahat/satellizer/commits/master/satellizer.js?author=sfwc"><img alt="@sfwc" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/23231?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="arterzatij" href="/sahat/satellizer/commits/master/satellizer.js?author=arterzatij"><img alt="@arterzatij" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/1568541?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="mad-raz" href="/sahat/satellizer/commits/master/satellizer.js?author=mad-raz"><img alt="@mad-raz" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/347712?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="MattTheRed" href="/sahat/satellizer/commits/master/satellizer.js?author=MattTheRed"><img alt="@MattTheRed" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/784532?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="JetFault" href="/sahat/satellizer/commits/master/satellizer.js?author=JetFault"><img alt="@JetFault" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/487245?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="montgomery1944" href="/sahat/satellizer/commits/master/satellizer.js?author=montgomery1944"><img alt="@montgomery1944" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/5021862?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="philippeluickx" href="/sahat/satellizer/commits/master/satellizer.js?author=philippeluickx"><img alt="@philippeluickx" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/836866?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="peteboere" href="/sahat/satellizer/commits/master/satellizer.js?author=peteboere"><img alt="@peteboere" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/58157?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="paulvanbladel" href="/sahat/satellizer/commits/master/satellizer.js?author=paulvanbladel"><img alt="@paulvanbladel" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/4886272?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="NicolasBlois" href="/sahat/satellizer/commits/master/satellizer.js?author=NicolasBlois"><img alt="@NicolasBlois" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/6443098?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Nekle" href="/sahat/satellizer/commits/master/satellizer.js?author=Nekle"><img alt="@Nekle" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/1272353?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="milo-hyben" href="/sahat/satellizer/commits/master/satellizer.js?author=milo-hyben"><img alt="@milo-hyben" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/981033?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="stackus" href="/sahat/satellizer/commits/master/satellizer.js?author=stackus"><img alt="@stackus" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/158579?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="hilnius" href="/sahat/satellizer/commits/master/satellizer.js?author=hilnius"><img alt="@hilnius" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/3486790?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="mathroc" href="/sahat/satellizer/commits/master/satellizer.js?author=mathroc"><img alt="@mathroc" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/291531?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="RKushnir" href="/sahat/satellizer/commits/master/satellizer.js?author=RKushnir"><img alt="@RKushnir" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/205906?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="timsly" href="/sahat/satellizer/commits/master/satellizer.js?author=timsly"><img alt="@timsly" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/471335?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="indieforger" href="/sahat/satellizer/commits/master/satellizer.js?author=indieforger"><img alt="@indieforger" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/10958238?v=3&amp;s=40" width="20" /> </a>

    <button type="button" data-facebox="#blob_contributors_box" class="btn-link others-text">and others</button>

    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@sahat" height="24" src="https://avatars1.githubusercontent.com/u/544954?v=3&amp;s=48" width="24" />
            <a href="/sahat">sahat</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@TheOneTheOnlyDavidBrown" height="24" src="https://avatars1.githubusercontent.com/u/1423875?v=3&amp;s=48" width="24" />
            <a href="/TheOneTheOnlyDavidBrown">TheOneTheOnlyDavidBrown</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@cridenour" height="24" src="https://avatars2.githubusercontent.com/u/175568?v=3&amp;s=48" width="24" />
            <a href="/cridenour">cridenour</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@krystalcode" height="24" src="https://avatars3.githubusercontent.com/u/301364?v=3&amp;s=48" width="24" />
            <a href="/krystalcode">krystalcode</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@niemyjski" height="24" src="https://avatars0.githubusercontent.com/u/1020579?v=3&amp;s=48" width="24" />
            <a href="/niemyjski">niemyjski</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@viniciusdacal" height="24" src="https://avatars1.githubusercontent.com/u/2660570?v=3&amp;s=48" width="24" />
            <a href="/viniciusdacal">viniciusdacal</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@amullins83" height="24" src="https://avatars2.githubusercontent.com/u/199260?v=3&amp;s=48" width="24" />
            <a href="/amullins83">amullins83</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@tymondesigns" height="24" src="https://avatars1.githubusercontent.com/u/1801923?v=3&amp;s=48" width="24" />
            <a href="/tymondesigns">tymondesigns</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@sfwc" height="24" src="https://avatars3.githubusercontent.com/u/23231?v=3&amp;s=48" width="24" />
            <a href="/sfwc">sfwc</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@arterzatij" height="24" src="https://avatars0.githubusercontent.com/u/1568541?v=3&amp;s=48" width="24" />
            <a href="/arterzatij">arterzatij</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@mad-raz" height="24" src="https://avatars2.githubusercontent.com/u/347712?v=3&amp;s=48" width="24" />
            <a href="/mad-raz">mad-raz</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@MattTheRed" height="24" src="https://avatars0.githubusercontent.com/u/784532?v=3&amp;s=48" width="24" />
            <a href="/MattTheRed">MattTheRed</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@JetFault" height="24" src="https://avatars2.githubusercontent.com/u/487245?v=3&amp;s=48" width="24" />
            <a href="/JetFault">JetFault</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@montgomery1944" height="24" src="https://avatars3.githubusercontent.com/u/5021862?v=3&amp;s=48" width="24" />
            <a href="/montgomery1944">montgomery1944</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@philippeluickx" height="24" src="https://avatars1.githubusercontent.com/u/836866?v=3&amp;s=48" width="24" />
            <a href="/philippeluickx">philippeluickx</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@peteboere" height="24" src="https://avatars0.githubusercontent.com/u/58157?v=3&amp;s=48" width="24" />
            <a href="/peteboere">peteboere</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@paulvanbladel" height="24" src="https://avatars3.githubusercontent.com/u/4886272?v=3&amp;s=48" width="24" />
            <a href="/paulvanbladel">paulvanbladel</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@NicolasBlois" height="24" src="https://avatars2.githubusercontent.com/u/6443098?v=3&amp;s=48" width="24" />
            <a href="/NicolasBlois">NicolasBlois</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@Nekle" height="24" src="https://avatars3.githubusercontent.com/u/1272353?v=3&amp;s=48" width="24" />
            <a href="/Nekle">Nekle</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@milo-hyben" height="24" src="https://avatars0.githubusercontent.com/u/981033?v=3&amp;s=48" width="24" />
            <a href="/milo-hyben">milo-hyben</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@stackus" height="24" src="https://avatars3.githubusercontent.com/u/158579?v=3&amp;s=48" width="24" />
            <a href="/stackus">stackus</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@hilnius" height="24" src="https://avatars1.githubusercontent.com/u/3486790?v=3&amp;s=48" width="24" />
            <a href="/hilnius">hilnius</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@mathroc" height="24" src="https://avatars1.githubusercontent.com/u/291531?v=3&amp;s=48" width="24" />
            <a href="/mathroc">mathroc</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@RKushnir" height="24" src="https://avatars2.githubusercontent.com/u/205906?v=3&amp;s=48" width="24" />
            <a href="/RKushnir">RKushnir</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@timsly" height="24" src="https://avatars1.githubusercontent.com/u/471335?v=3&amp;s=48" width="24" />
            <a href="/timsly">timsly</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@indieforger" height="24" src="https://avatars2.githubusercontent.com/u/10958238?v=3&amp;s=48" width="24" />
            <a href="/indieforger">indieforger</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@hitmands" height="24" src="https://avatars3.githubusercontent.com/u/5674833?v=3&amp;s=48" width="24" />
            <a href="/hitmands">hitmands</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@eamonnfaherty" height="24" src="https://avatars3.githubusercontent.com/u/273558?v=3&amp;s=48" width="24" />
            <a href="/eamonnfaherty">eamonnfaherty</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@Foxandxss" height="24" src="https://avatars0.githubusercontent.com/u/1087957?v=3&amp;s=48" width="24" />
            <a href="/Foxandxss">Foxandxss</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@cforycki" height="24" src="https://avatars1.githubusercontent.com/u/13793980?v=3&amp;s=48" width="24" />
            <a href="/cforycki">cforycki</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@sabrehagen" height="24" src="https://avatars2.githubusercontent.com/u/1094600?v=3&amp;s=48" width="24" />
            <a href="/sabrehagen">sabrehagen</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@redwood-egarcea" height="24" src="https://avatars3.githubusercontent.com/u/8050644?v=3&amp;s=48" width="24" />
            <a href="/redwood-egarcea">redwood-egarcea</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@glsee" height="24" src="https://avatars0.githubusercontent.com/u/457429?v=3&amp;s=48" width="24" />
            <a href="/glsee">glsee</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@manumiranda" height="24" src="https://avatars3.githubusercontent.com/u/13812930?v=3&amp;s=48" width="24" />
            <a href="/manumiranda">manumiranda</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@Gillardo" height="24" src="https://avatars1.githubusercontent.com/u/7406381?v=3&amp;s=48" width="24" />
            <a href="/Gillardo">Gillardo</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@deini" height="24" src="https://avatars1.githubusercontent.com/u/2752665?v=3&amp;s=48" width="24" />
            <a href="/deini">deini</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@dsimmons" height="24" src="https://avatars1.githubusercontent.com/u/694034?v=3&amp;s=48" width="24" />
            <a href="/dsimmons">dsimmons</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@crtek" height="24" src="https://avatars3.githubusercontent.com/u/688494?v=3&amp;s=48" width="24" />
            <a href="/crtek">crtek</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@vitalyrotari" height="24" src="https://avatars1.githubusercontent.com/u/124706?v=3&amp;s=48" width="24" />
            <a href="/vitalyrotari">vitalyrotari</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@Martinsos" height="24" src="https://avatars2.githubusercontent.com/u/1536647?v=3&amp;s=48" width="24" />
            <a href="/Martinsos">Martinsos</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@bruslim" height="24" src="https://avatars3.githubusercontent.com/u/234777?v=3&amp;s=48" width="24" />
            <a href="/bruslim">bruslim</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@stryju" height="24" src="https://avatars0.githubusercontent.com/u/25367?v=3&amp;s=48" width="24" />
            <a href="/stryju">stryju</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@bindzus" height="24" src="https://avatars1.githubusercontent.com/u/107972?v=3&amp;s=48" width="24" />
            <a href="/bindzus">bindzus</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@bmelton" height="24" src="https://avatars2.githubusercontent.com/u/45873?v=3&amp;s=48" width="24" />
            <a href="/bmelton">bmelton</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@tepez" height="24" src="https://avatars3.githubusercontent.com/u/3265649?v=3&amp;s=48" width="24" />
            <a href="/tepez">tepez</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@viniciusmelquiades" height="24" src="https://avatars2.githubusercontent.com/u/1378981?v=3&amp;s=48" width="24" />
            <a href="/viniciusmelquiades">viniciusmelquiades</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@amitaibu" height="24" src="https://avatars2.githubusercontent.com/u/125707?v=3&amp;s=48" width="24" />
            <a href="/amitaibu">amitaibu</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/sahat/satellizer/raw/master/satellizer.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/sahat/satellizer/blame/master/satellizer.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/sahat/satellizer/commits/master/satellizer.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://windows.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-0.55 0-1 0.45-1 1v9c0 0.55 0.45 1 1 1h5.34c-0.25 0.61-0.86 1.39-2.34 2h8c-1.48-0.61-2.09-1.39-2.34-2h5.34c0.55 0 1-0.45 1-1V3c0-0.55-0.45-1-1-1z m0 9H1V3h14v8z"></path></svg>
        </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/sahat/satellizer/edit/master/satellizer.js" class="inline-form js-update-url-with-hash" data-form-nonce="d1b8132d35ea1a1d1bb00f7671d62cc98834d2eb" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="G3gGtIRJbAyNbwUMWn2BMcnAoICrEu4uOP1RI8hsGNZqO43Iy0iCzbj3z69lL6eDEL3qOuhDPsGjJ6FfsJkT9g==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M0 12v3h3l8-8-3-3L0 12z m3 2H1V12h1v1h1v1z m10.3-9.3l-1.3 1.3-3-3 1.3-1.3c0.39-0.39 1.02-0.39 1.41 0l1.59 1.59c0.39 0.39 0.39 1.02 0 1.41z"></path></svg>
          </button>
</form>        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/sahat/satellizer/delete/master/satellizer.js" class="inline-form" data-form-nonce="d1b8132d35ea1a1d1bb00f7671d62cc98834d2eb" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="uFlBUXOt9jigV1aYg9T0xSlGLefa4sTpvcimcpGjS4jdbCgHbkSQfdd8ZTlzLqDQaZGiySLHGIvu5+FdjipG9w==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M10 2H8c0-0.55-0.45-1-1-1H4c-0.55 0-1 0.45-1 1H1c-0.55 0-1 0.45-1 1v1c0 0.55 0.45 1 1 1v9c0 0.55 0.45 1 1 1h7c0.55 0 1-0.45 1-1V5c0.55 0 1-0.45 1-1v-1c0-0.55-0.45-1-1-1z m-1 12H2V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9z m1-10H1v-1h9v1z"></path></svg>
          </button>
</form>  </div>

  <div class="file-info">
      968 lines (831 sloc)
      <span class="file-info-divider"></span>
    31.8 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Satellizer 0.14.0</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * (c) 2016 Sahat Yalkabov</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * License: MIT</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// CommonJS package manager support.</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-c1">module</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> <span class="pl-c1">exports</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">===</span> <span class="pl-c1">exports</span>) {</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>satellizer<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span>(<span class="pl-c1">window</span>, <span class="pl-smi">angular</span>, <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">window</span>.<span class="pl-c1">location</span>.<span class="pl-smi">origin</span>) {</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">window</span>.<span class="pl-c1">location</span>.<span class="pl-smi">origin</span> <span class="pl-k">=</span> <span class="pl-c1">window</span>.<span class="pl-c1">location</span>.<span class="pl-c1">protocol</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>//<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">window</span>.<span class="pl-c1">location</span>.<span class="pl-c1">hostname</span> <span class="pl-k">+</span> (<span class="pl-c1">window</span>.<span class="pl-c1">location</span>.<span class="pl-c1">port</span> <span class="pl-k">?</span> (<span class="pl-s"><span class="pl-pds">&#39;</span>:<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">window</span>.<span class="pl-c1">location</span>.<span class="pl-c1">port</span>) <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">angular</span>.<span class="pl-en">module</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>satellizer<span class="pl-pds">&#39;</span></span>, [])</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">    .<span class="pl-en">constant</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>SatellizerConfig<span class="pl-pds">&#39;</span></span>, {</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">httpInterceptor</span><span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> <span class="pl-c1">true</span>; },</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">      withCredentials<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">      tokenRoot<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">      baseUrl<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">      loginUrl<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>/auth/login<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">      signupUrl<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>/auth/signup<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">      unlinkUrl<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>/auth/unlink<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">      tokenName<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>token<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">      tokenPrefix<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>satellizer<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">      authHeader<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Authorization<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">      authToken<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Bearer<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">      storageType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>localStorage<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">      providers<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">        facebook<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">          name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>facebook<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">          url<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>/auth/facebook<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">          authorizationEndpoint<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>https://www.facebook.com/v2.5/dialog/oauth<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">          redirectUri<span class="pl-k">:</span> <span class="pl-c1">window</span>.<span class="pl-c1">location</span>.<span class="pl-smi">origin</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">          requiredUrlParams<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>display<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>scope<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">          scope<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>email<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">          scopeDelimiter<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>,<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">          display<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>popup<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">          oauthType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2.0<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">          popupOptions<span class="pl-k">:</span> { width<span class="pl-k">:</span> <span class="pl-c1">580</span>, height<span class="pl-k">:</span> <span class="pl-c1">400</span> }</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">        google<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">          name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>google<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">          url<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>/auth/google<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">          authorizationEndpoint<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>https://accounts.google.com/o/oauth2/auth<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">          redirectUri<span class="pl-k">:</span> <span class="pl-c1">window</span>.<span class="pl-c1">location</span>.<span class="pl-smi">origin</span>,</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">          requiredUrlParams<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>scope<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">          optionalUrlParams<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>display<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>state<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">          scope<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>profile<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>email<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">          scopePrefix<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>openid<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">          scopeDelimiter<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">          display<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>popup<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">          oauthType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2.0<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">          popupOptions<span class="pl-k">:</span> { width<span class="pl-k">:</span> <span class="pl-c1">452</span>, height<span class="pl-k">:</span> <span class="pl-c1">633</span> },</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">state</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> rand <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">random</span>().<span class="pl-c1">toString</span>(<span class="pl-c1">36</span>).<span class="pl-c1">substr</span>(<span class="pl-c1">2</span>);</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-c1">encodeURIComponent</span>(rand);</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">        github<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">          name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>github<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">          url<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>/auth/github<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">          authorizationEndpoint<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>https://github.com/login/oauth/authorize<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">          redirectUri<span class="pl-k">:</span> <span class="pl-c1">window</span>.<span class="pl-c1">location</span>.<span class="pl-smi">origin</span>,</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">          optionalUrlParams<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>scope<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">          scope<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>user:email<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">          scopeDelimiter<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">          oauthType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2.0<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">          popupOptions<span class="pl-k">:</span> { width<span class="pl-k">:</span> <span class="pl-c1">1020</span>, height<span class="pl-k">:</span> <span class="pl-c1">618</span> }</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">        instagram<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">          name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>instagram<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">          url<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>/auth/instagram<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">          authorizationEndpoint<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>https://api.instagram.com/oauth/authorize<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">          redirectUri<span class="pl-k">:</span> <span class="pl-c1">window</span>.<span class="pl-c1">location</span>.<span class="pl-smi">origin</span>,</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">          requiredUrlParams<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>scope<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">          scope<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>basic<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">          scopeDelimiter<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>+<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">          oauthType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2.0<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">        linkedin<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">          name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>linkedin<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">          url<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>/auth/linkedin<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">          authorizationEndpoint<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>https://www.linkedin.com/uas/oauth2/authorization<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">          redirectUri<span class="pl-k">:</span> <span class="pl-c1">window</span>.<span class="pl-c1">location</span>.<span class="pl-smi">origin</span>,</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">          requiredUrlParams<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>state<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">          scope<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>r_emailaddress<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">          scopeDelimiter<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">          state<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>STATE<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">          oauthType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2.0<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">          popupOptions<span class="pl-k">:</span> { width<span class="pl-k">:</span> <span class="pl-c1">527</span>, height<span class="pl-k">:</span> <span class="pl-c1">582</span> }</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">        twitter<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">          name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>twitter<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">          url<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>/auth/twitter<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">          authorizationEndpoint<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>https://api.twitter.com/oauth/authenticate<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">          redirectUri<span class="pl-k">:</span> <span class="pl-c1">window</span>.<span class="pl-c1">location</span>.<span class="pl-smi">origin</span>,</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">          oauthType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>1.0<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">          popupOptions<span class="pl-k">:</span> { width<span class="pl-k">:</span> <span class="pl-c1">495</span>, height<span class="pl-k">:</span> <span class="pl-c1">645</span> }</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">        twitch<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">          name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>twitch<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">          url<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>/auth/twitch<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">          authorizationEndpoint<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>https://api.twitch.tv/kraken/oauth2/authorize<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">          redirectUri<span class="pl-k">:</span> <span class="pl-c1">window</span>.<span class="pl-c1">location</span>.<span class="pl-smi">origin</span>,</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">          requiredUrlParams<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>scope<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">          scope<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>user_read<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">          scopeDelimiter<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">          display<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>popup<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">          oauthType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2.0<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">          popupOptions<span class="pl-k">:</span> { width<span class="pl-k">:</span> <span class="pl-c1">500</span>, height<span class="pl-k">:</span> <span class="pl-c1">560</span> }</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">        live<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">          name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>live<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">          url<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>/auth/live<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">          authorizationEndpoint<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>https://login.live.com/oauth20_authorize.srf<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">          redirectUri<span class="pl-k">:</span> <span class="pl-c1">window</span>.<span class="pl-c1">location</span>.<span class="pl-smi">origin</span>,</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">          requiredUrlParams<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>display<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>scope<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">          scope<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>wl.emails<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">          scopeDelimiter<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">          display<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>popup<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">          oauthType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2.0<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">          popupOptions<span class="pl-k">:</span> { width<span class="pl-k">:</span> <span class="pl-c1">500</span>, height<span class="pl-k">:</span> <span class="pl-c1">560</span> }</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">        yahoo<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">          name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>yahoo<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">          url<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>/auth/yahoo<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">          authorizationEndpoint<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>https://api.login.yahoo.com/oauth2/request_auth<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">          redirectUri<span class="pl-k">:</span> <span class="pl-c1">window</span>.<span class="pl-c1">location</span>.<span class="pl-smi">origin</span>,</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">          scope<span class="pl-k">:</span> [],</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">          scopeDelimiter<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>,<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">          oauthType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2.0<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">          popupOptions<span class="pl-k">:</span> { width<span class="pl-k">:</span> <span class="pl-c1">559</span>, height<span class="pl-k">:</span> <span class="pl-c1">519</span> }</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">        bitbucket<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">          name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>bitbucket<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">          url<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>/auth/bitbucket<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">          authorizationEndpoint<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>https://bitbucket.org/site/oauth2/authorize<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">          redirectUri<span class="pl-k">:</span> <span class="pl-c1">window</span>.<span class="pl-c1">location</span>.<span class="pl-smi">origin</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">          requiredUrlParams<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>scope<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">          scope<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>email<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">          scopeDelimiter<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">          oauthType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2.0<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">          popupOptions<span class="pl-k">:</span> { width<span class="pl-k">:</span> <span class="pl-c1">1028</span>, height<span class="pl-k">:</span> <span class="pl-c1">529</span> }</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">    })</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">    .<span class="pl-en">provider</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>$auth<span class="pl-pds">&#39;</span></span>, [<span class="pl-s"><span class="pl-pds">&#39;</span>SatellizerConfig<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">config</span>) {</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">Object</span>.<span class="pl-en">defineProperties</span>(<span class="pl-v">this</span>, {</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">        httpInterceptor<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">get</span><span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> <span class="pl-smi">config</span>.<span class="pl-smi">httpInterceptor</span>; },</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">set</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">value</span>) {</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">typeof</span> value <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">              <span class="pl-smi">config</span>.<span class="pl-smi">httpInterceptor</span> <span class="pl-k">=</span> value;</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">            } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">              <span class="pl-smi">config</span>.<span class="pl-en">httpInterceptor</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> value;</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">              };</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">        baseUrl<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">get</span><span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> <span class="pl-smi">config</span>.<span class="pl-smi">baseUrl</span>; },</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">set</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">value</span>) { <span class="pl-smi">config</span>.<span class="pl-smi">baseUrl</span> <span class="pl-k">=</span> value; }</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">        loginUrl<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">get</span><span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> <span class="pl-smi">config</span>.<span class="pl-smi">loginUrl</span>; },</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">set</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">value</span>) { <span class="pl-smi">config</span>.<span class="pl-smi">loginUrl</span> <span class="pl-k">=</span> value; }</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">        signupUrl<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">get</span><span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> <span class="pl-smi">config</span>.<span class="pl-smi">signupUrl</span>; },</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">set</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">value</span>) { <span class="pl-smi">config</span>.<span class="pl-smi">signupUrl</span> <span class="pl-k">=</span> value; }</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">        tokenRoot<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">get</span><span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> <span class="pl-smi">config</span>.<span class="pl-smi">tokenRoot</span>; },</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">set</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">value</span>) { <span class="pl-smi">config</span>.<span class="pl-smi">tokenRoot</span> <span class="pl-k">=</span> value; }</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">        tokenName<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">get</span><span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> <span class="pl-smi">config</span>.<span class="pl-smi">tokenName</span>; },</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">set</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">value</span>) { <span class="pl-smi">config</span>.<span class="pl-smi">tokenName</span> <span class="pl-k">=</span> value; }</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">        tokenPrefix<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">get</span><span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> <span class="pl-smi">config</span>.<span class="pl-smi">tokenPrefix</span>; },</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">set</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">value</span>) { <span class="pl-smi">config</span>.<span class="pl-smi">tokenPrefix</span> <span class="pl-k">=</span> value; }</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">        unlinkUrl<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">get</span><span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> <span class="pl-smi">config</span>.<span class="pl-smi">unlinkUrl</span>; },</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">set</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">value</span>) { <span class="pl-smi">config</span>.<span class="pl-smi">unlinkUrl</span> <span class="pl-k">=</span> value; }</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">        authHeader<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">get</span><span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> <span class="pl-smi">config</span>.<span class="pl-smi">authHeader</span>; },</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">set</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">value</span>) { <span class="pl-smi">config</span>.<span class="pl-smi">authHeader</span> <span class="pl-k">=</span> value; }</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">        authToken<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">get</span><span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> <span class="pl-smi">config</span>.<span class="pl-smi">authToken</span>; },</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">set</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">value</span>) { <span class="pl-smi">config</span>.<span class="pl-smi">authToken</span> <span class="pl-k">=</span> value; }</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">        withCredentials<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">get</span><span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> <span class="pl-smi">config</span>.<span class="pl-smi">withCredentials</span>; },</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">set</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">value</span>) { <span class="pl-smi">config</span>.<span class="pl-smi">withCredentials</span> <span class="pl-k">=</span> value; }</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">        storageType<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">get</span><span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> <span class="pl-smi">config</span>.<span class="pl-smi">storageType</span>; },</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">set</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">value</span>) { <span class="pl-smi">config</span>.<span class="pl-smi">storageType</span> <span class="pl-k">=</span> value; }</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">angular</span>.<span class="pl-en">forEach</span>(<span class="pl-c1">Object</span>.<span class="pl-en">keys</span>(<span class="pl-smi">config</span>.<span class="pl-smi">providers</span>), <span class="pl-k">function</span>(<span class="pl-smi">provider</span>) {</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">        <span class="pl-v">this</span>[provider] <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">params</span>) {</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-smi">angular</span>.<span class="pl-en">extend</span>(<span class="pl-smi">config</span>.<span class="pl-smi">providers</span>[provider], params);</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">      }, <span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> <span class="pl-en">oauth</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">params</span>) {</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">config</span>.<span class="pl-smi">providers</span>[<span class="pl-smi">params</span>.<span class="pl-c1">name</span>] <span class="pl-k">=</span> <span class="pl-smi">config</span>.<span class="pl-smi">providers</span>[<span class="pl-smi">params</span>.<span class="pl-c1">name</span>] <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">angular</span>.<span class="pl-en">extend</span>(<span class="pl-smi">config</span>.<span class="pl-smi">providers</span>[<span class="pl-smi">params</span>.<span class="pl-c1">name</span>], params);</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">      <span class="pl-v">this</span>.<span class="pl-en">oauth1</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">params</span>) {</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">oauth</span>(params);</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">config</span>.<span class="pl-smi">providers</span>[<span class="pl-smi">params</span>.<span class="pl-c1">name</span>].<span class="pl-smi">oauthType</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>1.0<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">      <span class="pl-v">this</span>.<span class="pl-en">oauth2</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">params</span>) {</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">oauth</span>(params);</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">config</span>.<span class="pl-smi">providers</span>[<span class="pl-smi">params</span>.<span class="pl-c1">name</span>].<span class="pl-smi">oauthType</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2.0<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">      <span class="pl-v">this</span>.<span class="pl-smi">$get</span> <span class="pl-k">=</span> [</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>$q<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>SatellizerShared<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>SatellizerLocal<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>SatellizerOauth<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span>(<span class="pl-smi">$q</span>, <span class="pl-smi">shared</span>, <span class="pl-smi">local</span>, <span class="pl-smi">oauth</span>) {</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> $auth <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">$auth</span>.<span class="pl-en">login</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">user</span>, <span class="pl-smi">opts</span>) {</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">local</span>.<span class="pl-en">login</span>(user, opts);</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">$auth</span>.<span class="pl-en">signup</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">user</span>, <span class="pl-smi">options</span>) {</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">local</span>.<span class="pl-en">signup</span>(user, options);</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">$auth</span>.<span class="pl-en">logout</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">shared</span>.<span class="pl-en">logout</span>();</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">$auth</span>.<span class="pl-en">authenticate</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">name</span>, <span class="pl-smi">userData</span>) {</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">oauth</span>.<span class="pl-en">authenticate</span>(name, userData);</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">$auth</span>.<span class="pl-en">link</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">name</span>, <span class="pl-smi">userData</span>) {</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">oauth</span>.<span class="pl-en">authenticate</span>(name, userData);</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">$auth</span>.<span class="pl-en">unlink</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">provider</span>, <span class="pl-smi">opts</span>) {</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">oauth</span>.<span class="pl-en">unlink</span>(provider, opts);</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">$auth</span>.<span class="pl-en">isAuthenticated</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">shared</span>.<span class="pl-en">isAuthenticated</span>();</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">$auth</span>.<span class="pl-en">getToken</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">shared</span>.<span class="pl-en">getToken</span>();</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">$auth</span>.<span class="pl-en">setToken</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">token</span>) {</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">shared</span>.<span class="pl-en">setToken</span>({ access_token<span class="pl-k">:</span> token });</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">$auth</span>.<span class="pl-en">removeToken</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">shared</span>.<span class="pl-en">removeToken</span>();</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">$auth</span>.<span class="pl-en">getPayload</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">shared</span>.<span class="pl-en">getPayload</span>();</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">$auth</span>.<span class="pl-en">setStorageType</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">type</span>) {</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">shared</span>.<span class="pl-en">setStorageType</span>(type);</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> $auth;</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">        }];</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">    }])</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">    .<span class="pl-en">factory</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>SatellizerShared<span class="pl-pds">&#39;</span></span>, [</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>$q<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>$window<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>$log<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>SatellizerConfig<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>SatellizerStorage<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">function</span>(<span class="pl-smi">$q</span>, <span class="pl-smi">$window</span>, <span class="pl-smi">$log</span>, <span class="pl-smi">config</span>, <span class="pl-smi">storage</span>) {</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> Shared <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> tokenName <span class="pl-k">=</span> <span class="pl-smi">config</span>.<span class="pl-smi">tokenPrefix</span> <span class="pl-k">?</span> [<span class="pl-smi">config</span>.<span class="pl-smi">tokenPrefix</span>, <span class="pl-smi">config</span>.<span class="pl-smi">tokenName</span>].<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>_<span class="pl-pds">&#39;</span></span>) <span class="pl-k">:</span> <span class="pl-smi">config</span>.<span class="pl-smi">tokenName</span>;</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">Shared</span>.<span class="pl-en">getToken</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-smi">storage</span>.<span class="pl-en">get</span>(tokenName);</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">Shared</span>.<span class="pl-en">getPayload</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> token <span class="pl-k">=</span> <span class="pl-smi">storage</span>.<span class="pl-en">get</span>(tokenName);</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (token <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">token</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">3</span>) {</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">var</span> base64Url <span class="pl-k">=</span> <span class="pl-smi">token</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">var</span> base64 <span class="pl-k">=</span> <span class="pl-smi">base64Url</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>-<span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>+<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>_<span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">return</span> <span class="pl-c1">JSON</span>.<span class="pl-c1">parse</span>(<span class="pl-c1">decodeURIComponent</span>(<span class="pl-c1">escape</span>(<span class="pl-c1">window</span>.<span class="pl-c1">atob</span>(base64))));</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">            } <span class="pl-k">catch</span>(e) {</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">return</span> <span class="pl-c1">undefined</span>;</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">Shared</span>.<span class="pl-en">setToken</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">response</span>) {</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (<span class="pl-k">!</span>response) {</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">$log</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Can<span class="pl-cce">\&#39;</span>t set token without passing a value<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> accessToken <span class="pl-k">=</span> response <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">response</span>.<span class="pl-smi">access_token</span>;</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> token;</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (accessToken) {</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">angular</span>.<span class="pl-en">isObject</span>(accessToken) <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">angular</span>.<span class="pl-en">isObject</span>(<span class="pl-smi">accessToken</span>.<span class="pl-c1">data</span>)) {</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">              response <span class="pl-k">=</span> accessToken;</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">            } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-smi">angular</span>.<span class="pl-en">isString</span>(accessToken)) {</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">              token <span class="pl-k">=</span> accessToken;</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (<span class="pl-k">!</span>token <span class="pl-k">&amp;&amp;</span> response) {</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> tokenRootData <span class="pl-k">=</span> <span class="pl-smi">config</span>.<span class="pl-smi">tokenRoot</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">config</span>.<span class="pl-smi">tokenRoot</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span>).<span class="pl-en">reduce</span>(<span class="pl-k">function</span>(<span class="pl-smi">o</span>, <span class="pl-smi">x</span>) { <span class="pl-k">return</span> o[x]; }, <span class="pl-smi">response</span>.<span class="pl-c1">data</span>);</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">            token <span class="pl-k">=</span> tokenRootData <span class="pl-k">?</span> tokenRootData[<span class="pl-smi">config</span>.<span class="pl-smi">tokenName</span>] <span class="pl-k">:</span> <span class="pl-smi">response</span>.<span class="pl-c1">data</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">response</span>.<span class="pl-c1">data</span>[<span class="pl-smi">config</span>.<span class="pl-smi">tokenName</span>];</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (<span class="pl-k">!</span>token) {</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> tokenPath <span class="pl-k">=</span> <span class="pl-smi">config</span>.<span class="pl-smi">tokenRoot</span> <span class="pl-k">?</span> <span class="pl-smi">config</span>.<span class="pl-smi">tokenRoot</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">config</span>.<span class="pl-smi">tokenName</span> <span class="pl-k">:</span> <span class="pl-smi">config</span>.<span class="pl-smi">tokenName</span>;</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">$log</span>.<span class="pl-en">warn</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Expecting a token named &quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> tokenPath);</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">storage</span>.<span class="pl-en">set</span>(tokenName, token);</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">Shared</span>.<span class="pl-en">removeToken</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">storage</span>.<span class="pl-en">remove</span>(tokenName);</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@returns</span> {boolean}</span></td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         */</span></td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">Shared</span>.<span class="pl-en">isAuthenticated</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> token <span class="pl-k">=</span> <span class="pl-smi">storage</span>.<span class="pl-en">get</span>(tokenName);</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">          <span class="pl-c">// A token is present</span></td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (token) {</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">// Token with a valid JWT format XXX.YYY.ZZZ</span></td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">token</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">3</span>) {</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">              <span class="pl-c">// Could be a valid JWT or an access token with the same format</span></td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> base64Url <span class="pl-k">=</span> <span class="pl-smi">token</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> base64 <span class="pl-k">=</span> <span class="pl-smi">base64Url</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>-<span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>+<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>_<span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> exp <span class="pl-k">=</span> <span class="pl-c1">JSON</span>.<span class="pl-c1">parse</span>(<span class="pl-smi">$window</span>.<span class="pl-c1">atob</span>(base64)).<span class="pl-smi">exp</span>;</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">                <span class="pl-c">// JWT with an optonal expiration claims</span></td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (exp) {</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">var</span> isExpired <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">round</span>(<span class="pl-k">new</span> <span class="pl-en">Date</span>().<span class="pl-c1">getTime</span>() <span class="pl-k">/</span> <span class="pl-c1">1000</span>) <span class="pl-k">&gt;=</span> exp;</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">if</span> (isExpired) {</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line">                    <span class="pl-c">// FAIL: Expired token</span></td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line">                  } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line">                    <span class="pl-c">// PASS: Non-expired token</span></td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">                  }</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">              } <span class="pl-k">catch</span>(e) {</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">                <span class="pl-c">// PASS: Non-JWT token that looks like JWT</span></td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">// PASS: All other tokens</span></td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line">          <span class="pl-c">// FAIL: No token at all</span></td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">Shared</span>.<span class="pl-en">logout</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">storage</span>.<span class="pl-en">remove</span>(tokenName);</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-smi">$q</span>.<span class="pl-en">when</span>();</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">Shared</span>.<span class="pl-en">setStorageType</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">type</span>) {</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">config</span>.<span class="pl-smi">storageType</span> <span class="pl-k">=</span> type;</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> Shared;</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">      }])</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">    .<span class="pl-en">factory</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>SatellizerOauth<span class="pl-pds">&#39;</span></span>, [</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>$q<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>$http<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>SatellizerConfig<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>SatellizerUtils<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>SatellizerShared<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>SatellizerOauth1<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>SatellizerOauth2<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">function</span>(<span class="pl-smi">$q</span>, <span class="pl-smi">$http</span>, <span class="pl-smi">config</span>, <span class="pl-smi">utils</span>, <span class="pl-smi">shared</span>, <span class="pl-smi">Oauth1</span>, <span class="pl-smi">Oauth2</span>) {</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> Oauth <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">Oauth</span>.<span class="pl-en">authenticate</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">name</span>, <span class="pl-smi">userData</span>) {</td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> provider <span class="pl-k">=</span> <span class="pl-smi">config</span>.<span class="pl-smi">providers</span>[name].<span class="pl-smi">oauthType</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>1.0<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> <span class="pl-k">new</span> <span class="pl-en">Oauth1</span>() <span class="pl-k">:</span> <span class="pl-k">new</span> <span class="pl-en">Oauth2</span>();</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> deferred <span class="pl-k">=</span> <span class="pl-smi">$q</span>.<span class="pl-c1">defer</span>();</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">provider</span>.<span class="pl-c1">open</span>(<span class="pl-smi">config</span>.<span class="pl-smi">providers</span>[name], userData <span class="pl-k">||</span> {})</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line">            .<span class="pl-en">then</span>(<span class="pl-k">function</span>(<span class="pl-smi">response</span>) {</td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line">              <span class="pl-c">// This is for a scenario when someone wishes to opt out from</span></td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line">              <span class="pl-c">// Satellizer&#39;s magic by doing authorization code exchange and</span></td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line">              <span class="pl-c">// saving a token manually.</span></td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span> (<span class="pl-smi">config</span>.<span class="pl-smi">providers</span>[name].<span class="pl-smi">url</span>) {</td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">shared</span>.<span class="pl-en">setToken</span>(response, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line">              <span class="pl-smi">deferred</span>.<span class="pl-en">resolve</span>(response);</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line">            })</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line">            .<span class="pl-en">catch</span>(<span class="pl-k">function</span>(<span class="pl-smi">error</span>) {</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line">              <span class="pl-smi">deferred</span>.<span class="pl-en">reject</span>(error);</td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-smi">deferred</span>.<span class="pl-smi">promise</span>;</td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">Oauth</span>.<span class="pl-en">unlink</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">provider</span>, <span class="pl-smi">opts</span>) {</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line">          opts <span class="pl-k">=</span> opts <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">opts</span>.<span class="pl-smi">url</span> <span class="pl-k">=</span> <span class="pl-smi">opts</span>.<span class="pl-smi">url</span> <span class="pl-k">?</span> <span class="pl-smi">opts</span>.<span class="pl-smi">url</span> <span class="pl-k">:</span> <span class="pl-smi">utils</span>.<span class="pl-en">joinUrl</span>(<span class="pl-smi">config</span>.<span class="pl-smi">baseUrl</span>, <span class="pl-smi">config</span>.<span class="pl-smi">unlinkUrl</span>);</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">opts</span>.<span class="pl-c1">data</span> <span class="pl-k">=</span> { provider<span class="pl-k">:</span> provider } <span class="pl-k">||</span> <span class="pl-smi">opts</span>.<span class="pl-c1">data</span>;</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">opts</span>.<span class="pl-c1">method</span> <span class="pl-k">=</span> <span class="pl-smi">opts</span>.<span class="pl-c1">method</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span>POST<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">opts</span>.<span class="pl-smi">withCredentials</span> <span class="pl-k">=</span> <span class="pl-smi">opts</span>.<span class="pl-smi">withCredentials</span> <span class="pl-k">||</span> <span class="pl-smi">config</span>.<span class="pl-smi">withCredentials</span>;</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-en">$http</span>(opts);</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> Oauth;</td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line">      }])</td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line">    .<span class="pl-en">factory</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>SatellizerLocal<span class="pl-pds">&#39;</span></span>, [</td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>$http<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>SatellizerUtils<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>SatellizerShared<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>SatellizerConfig<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">function</span>(<span class="pl-smi">$http</span>, <span class="pl-smi">utils</span>, <span class="pl-smi">shared</span>, <span class="pl-smi">config</span>) {</td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> Local <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">Local</span>.<span class="pl-en">login</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">user</span>, <span class="pl-smi">opts</span>) {</td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line">          opts <span class="pl-k">=</span> opts <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">opts</span>.<span class="pl-smi">url</span> <span class="pl-k">=</span> <span class="pl-smi">opts</span>.<span class="pl-smi">url</span> <span class="pl-k">?</span> <span class="pl-smi">opts</span>.<span class="pl-smi">url</span> <span class="pl-k">:</span> <span class="pl-smi">utils</span>.<span class="pl-en">joinUrl</span>(<span class="pl-smi">config</span>.<span class="pl-smi">baseUrl</span>, <span class="pl-smi">config</span>.<span class="pl-smi">loginUrl</span>);</td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">opts</span>.<span class="pl-c1">data</span> <span class="pl-k">=</span> user <span class="pl-k">||</span> <span class="pl-smi">opts</span>.<span class="pl-c1">data</span>;</td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">opts</span>.<span class="pl-c1">method</span> <span class="pl-k">=</span> <span class="pl-smi">opts</span>.<span class="pl-c1">method</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span>POST<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">opts</span>.<span class="pl-smi">withCredentials</span> <span class="pl-k">=</span> <span class="pl-smi">opts</span>.<span class="pl-smi">withCredentials</span> <span class="pl-k">||</span> <span class="pl-smi">config</span>.<span class="pl-smi">withCredentials</span>;</td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-en">$http</span>(opts).<span class="pl-en">then</span>(<span class="pl-k">function</span>(<span class="pl-smi">response</span>) {</td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">shared</span>.<span class="pl-en">setToken</span>(response);</td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> response;</td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code blob-code-inner js-file-line">          });</td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">Local</span>.<span class="pl-en">signup</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">user</span>, <span class="pl-smi">opts</span>) {</td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code blob-code-inner js-file-line">          opts <span class="pl-k">=</span> opts <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">opts</span>.<span class="pl-smi">url</span> <span class="pl-k">=</span> <span class="pl-smi">opts</span>.<span class="pl-smi">url</span> <span class="pl-k">?</span> <span class="pl-smi">opts</span>.<span class="pl-smi">url</span> <span class="pl-k">:</span> <span class="pl-smi">utils</span>.<span class="pl-en">joinUrl</span>(<span class="pl-smi">config</span>.<span class="pl-smi">baseUrl</span>, <span class="pl-smi">config</span>.<span class="pl-smi">signupUrl</span>);</td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">opts</span>.<span class="pl-c1">data</span> <span class="pl-k">=</span> user <span class="pl-k">||</span> <span class="pl-smi">opts</span>.<span class="pl-c1">data</span>;</td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">opts</span>.<span class="pl-c1">method</span> <span class="pl-k">=</span> <span class="pl-smi">opts</span>.<span class="pl-c1">method</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span>POST<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">opts</span>.<span class="pl-smi">withCredentials</span> <span class="pl-k">=</span> <span class="pl-smi">opts</span>.<span class="pl-smi">withCredentials</span> <span class="pl-k">||</span> <span class="pl-smi">config</span>.<span class="pl-smi">withCredentials</span>;</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-en">$http</span>(opts);</td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> Local;</td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code blob-code-inner js-file-line">      }])</td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code blob-code-inner js-file-line">    .<span class="pl-en">factory</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>SatellizerOauth2<span class="pl-pds">&#39;</span></span>, [</td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>$q<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>$http<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>$window<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>$timeout<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>SatellizerPopup<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>SatellizerUtils<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>SatellizerConfig<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>SatellizerStorage<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">function</span>(<span class="pl-smi">$q</span>, <span class="pl-smi">$http</span>, <span class="pl-smi">$window</span>, <span class="pl-smi">$timeout</span>, <span class="pl-smi">popup</span>, <span class="pl-smi">utils</span>, <span class="pl-smi">config</span>, <span class="pl-smi">storage</span>) {</td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> Oauth2 <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> defaults <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code blob-code-inner js-file-line">            defaultUrlParams<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>response_type<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>client_id<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>redirect_uri<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code blob-code-inner js-file-line">            responseType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>code<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code blob-code-inner js-file-line">            responseParams<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code blob-code-inner js-file-line">              code<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>code<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code blob-code-inner js-file-line">              clientId<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>clientId<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code blob-code-inner js-file-line">              redirectUri<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>redirectUri<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code blob-code-inner js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">Oauth2</span>.<span class="pl-en">open</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">options</span>, <span class="pl-smi">userData</span>) {</td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code blob-code-inner js-file-line">            defaults <span class="pl-k">=</span> <span class="pl-smi">utils</span>.<span class="pl-en">merge</span>(options, defaults);</td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> defer <span class="pl-k">=</span> <span class="pl-smi">$q</span>.<span class="pl-c1">defer</span>();</td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">$timeout</span>(<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">var</span> url;</td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">var</span> openPopup;</td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">var</span> stateName <span class="pl-k">=</span> <span class="pl-smi">defaults</span>.<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>_state<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span> (<span class="pl-smi">angular</span>.<span class="pl-en">isFunction</span>(<span class="pl-smi">defaults</span>.<span class="pl-smi">state</span>)) {</td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">storage</span>.<span class="pl-en">set</span>(stateName, <span class="pl-smi">defaults</span>.<span class="pl-en">state</span>());</td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code blob-code-inner js-file-line">              } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-smi">angular</span>.<span class="pl-en">isString</span>(<span class="pl-smi">defaults</span>.<span class="pl-smi">state</span>)) {</td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">storage</span>.<span class="pl-en">set</span>(stateName, <span class="pl-smi">defaults</span>.<span class="pl-smi">state</span>);</td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code blob-code-inner js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code blob-code-inner js-file-line">              url <span class="pl-k">=</span> [<span class="pl-smi">defaults</span>.<span class="pl-smi">authorizationEndpoint</span>, <span class="pl-smi">Oauth2</span>.<span class="pl-en">buildQueryString</span>()].<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>?<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span> (<span class="pl-c1">window</span>.<span class="pl-smi">cordova</span>) {</td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code blob-code-inner js-file-line">                openPopup <span class="pl-k">=</span> <span class="pl-smi">popup</span>.<span class="pl-c1">open</span>(url, <span class="pl-smi">defaults</span>.<span class="pl-c1">name</span>, <span class="pl-smi">defaults</span>.<span class="pl-smi">popupOptions</span>, <span class="pl-smi">defaults</span>.<span class="pl-smi">redirectUri</span>).<span class="pl-en">eventListener</span>(<span class="pl-smi">defaults</span>.<span class="pl-smi">redirectUri</span>);</td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code blob-code-inner js-file-line">              } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code blob-code-inner js-file-line">                openPopup <span class="pl-k">=</span> <span class="pl-smi">popup</span>.<span class="pl-c1">open</span>(url, <span class="pl-smi">defaults</span>.<span class="pl-c1">name</span>, <span class="pl-smi">defaults</span>.<span class="pl-smi">popupOptions</span>, <span class="pl-smi">defaults</span>.<span class="pl-smi">redirectUri</span>).<span class="pl-en">pollPopup</span>(<span class="pl-smi">defaults</span>.<span class="pl-smi">redirectUri</span>);</td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code blob-code-inner js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">return</span> openPopup</td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code blob-code-inner js-file-line">                .<span class="pl-en">then</span>(<span class="pl-k">function</span>(<span class="pl-smi">oauthData</span>) {</td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code blob-code-inner js-file-line">                  <span class="pl-c">// When no server URL provided, return popup params as-is.</span></td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code blob-code-inner js-file-line">                  <span class="pl-c">// This is for a scenario when someone wishes to opt out from</span></td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code blob-code-inner js-file-line">                  <span class="pl-c">// Satellizer&#39;s magic by doing authorization code exchange and</span></td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code blob-code-inner js-file-line">                  <span class="pl-c">// saving a token manually.</span></td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">if</span> (<span class="pl-smi">defaults</span>.<span class="pl-smi">responseType</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>token<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-smi">defaults</span>.<span class="pl-smi">url</span>) {</td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> <span class="pl-smi">defer</span>.<span class="pl-en">resolve</span>(oauthData);</td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code blob-code-inner js-file-line">                  }</td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">if</span> (<span class="pl-smi">oauthData</span>.<span class="pl-smi">state</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">oauthData</span>.<span class="pl-smi">state</span> <span class="pl-k">!==</span> <span class="pl-smi">storage</span>.<span class="pl-en">get</span>(stateName)) {</td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> <span class="pl-smi">defer</span>.<span class="pl-en">reject</span>(</td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code blob-code-inner js-file-line">                      <span class="pl-s"><span class="pl-pds">&#39;</span>The value returned in the state parameter does not match the state value from your original <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code blob-code-inner js-file-line">                      <span class="pl-s"><span class="pl-pds">&#39;</span>authorization code request.<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code blob-code-inner js-file-line">                    );</td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code blob-code-inner js-file-line">                  }</td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code blob-code-inner js-file-line">                  <span class="pl-smi">defer</span>.<span class="pl-en">resolve</span>(<span class="pl-smi">Oauth2</span>.<span class="pl-en">exchangeForToken</span>(oauthData, userData));</td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code blob-code-inner js-file-line">                });</td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">defer</span>.<span class="pl-smi">promise</span>;</td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code blob-code-inner js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">Oauth2</span>.<span class="pl-en">exchangeForToken</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">oauthData</span>, <span class="pl-smi">userData</span>) {</td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> data <span class="pl-k">=</span> <span class="pl-smi">angular</span>.<span class="pl-en">extend</span>({}, userData);</td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">angular</span>.<span class="pl-en">forEach</span>(<span class="pl-smi">defaults</span>.<span class="pl-smi">responseParams</span>, <span class="pl-k">function</span>(<span class="pl-smi">value</span>, <span class="pl-smi">key</span>) {</td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">switch</span> (key) {</td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&#39;</span>code<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code blob-code-inner js-file-line">                  data[value] <span class="pl-k">=</span> <span class="pl-smi">oauthData</span>.<span class="pl-c1">code</span>;</td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&#39;</span>clientId<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code blob-code-inner js-file-line">                  data[value] <span class="pl-k">=</span> <span class="pl-smi">defaults</span>.<span class="pl-smi">clientId</span>;</td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&#39;</span>redirectUri<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code blob-code-inner js-file-line">                  data[value] <span class="pl-k">=</span> <span class="pl-smi">defaults</span>.<span class="pl-smi">redirectUri</span>;</td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">default</span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code blob-code-inner js-file-line">                  data[value] <span class="pl-k">=</span> oauthData[key];</td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code blob-code-inner js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">oauthData</span>.<span class="pl-smi">state</span>) {</td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code blob-code-inner js-file-line">              <span class="pl-smi">data</span>.<span class="pl-smi">state</span> <span class="pl-k">=</span> <span class="pl-smi">oauthData</span>.<span class="pl-smi">state</span>;</td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> exchangeForTokenUrl <span class="pl-k">=</span> <span class="pl-smi">config</span>.<span class="pl-smi">baseUrl</span> <span class="pl-k">?</span> <span class="pl-smi">utils</span>.<span class="pl-en">joinUrl</span>(<span class="pl-smi">config</span>.<span class="pl-smi">baseUrl</span>, <span class="pl-smi">defaults</span>.<span class="pl-smi">url</span>) <span class="pl-k">:</span> <span class="pl-smi">defaults</span>.<span class="pl-smi">url</span>;</td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">$http</span>.<span class="pl-en">post</span>(exchangeForTokenUrl, data, { withCredentials<span class="pl-k">:</span> <span class="pl-smi">config</span>.<span class="pl-smi">withCredentials</span> });</td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code blob-code-inner js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">Oauth2</span>.<span class="pl-en">buildQueryString</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> keyValuePairs <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> urlParamsCategories <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>defaultUrlParams<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>requiredUrlParams<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>optionalUrlParams<span class="pl-pds">&#39;</span></span>];</td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">angular</span>.<span class="pl-en">forEach</span>(urlParamsCategories, <span class="pl-k">function</span>(<span class="pl-smi">paramsCategory</span>) {</td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code blob-code-inner js-file-line">              <span class="pl-smi">angular</span>.<span class="pl-en">forEach</span>(defaults[paramsCategory], <span class="pl-k">function</span>(<span class="pl-smi">paramName</span>) {</td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> camelizedName <span class="pl-k">=</span> <span class="pl-smi">utils</span>.<span class="pl-en">camelCase</span>(paramName);</td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> paramValue <span class="pl-k">=</span> <span class="pl-smi">angular</span>.<span class="pl-en">isFunction</span>(defaults[paramName]) <span class="pl-k">?</span> defaults[paramName]() <span class="pl-k">:</span> defaults[camelizedName];</td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (paramName <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>redirect_uri<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>paramValue) {</td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (paramName <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>state<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">var</span> stateName <span class="pl-k">=</span> <span class="pl-smi">defaults</span>.<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>_state<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code blob-code-inner js-file-line">                  paramValue <span class="pl-k">=</span> <span class="pl-c1">encodeURIComponent</span>(<span class="pl-smi">storage</span>.<span class="pl-en">get</span>(stateName));</td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (paramName <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>scope<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">Array</span>.<span class="pl-en">isArray</span>(paramValue)) {</td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code blob-code-inner js-file-line">                  paramValue <span class="pl-k">=</span> <span class="pl-smi">paramValue</span>.<span class="pl-c1">join</span>(<span class="pl-smi">defaults</span>.<span class="pl-smi">scopeDelimiter</span>);</td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">if</span> (<span class="pl-smi">defaults</span>.<span class="pl-smi">scopePrefix</span>) {</td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code blob-code-inner js-file-line">                    paramValue <span class="pl-k">=</span> [<span class="pl-smi">defaults</span>.<span class="pl-smi">scopePrefix</span>, paramValue].<span class="pl-c1">join</span>(<span class="pl-smi">defaults</span>.<span class="pl-smi">scopeDelimiter</span>);</td>
      </tr>
      <tr>
        <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-code blob-code-inner js-file-line">                  }</td>
      </tr>
      <tr>
        <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">keyValuePairs</span>.<span class="pl-c1">push</span>([paramName, paramValue]);</td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code blob-code-inner js-file-line">              });</td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">keyValuePairs</span>.<span class="pl-en">map</span>(<span class="pl-k">function</span>(<span class="pl-smi">pair</span>) {</td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">return</span> <span class="pl-smi">pair</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>=<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code blob-code-inner js-file-line">            }).<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&amp;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code blob-code-inner js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> Oauth2;</td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code blob-code-inner js-file-line">      }])</td>
      </tr>
      <tr>
        <td id="L615" class="blob-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-code blob-code-inner js-file-line">    .<span class="pl-en">factory</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>SatellizerOauth1<span class="pl-pds">&#39;</span></span>, [</td>
      </tr>
      <tr>
        <td id="L616" class="blob-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>$q<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L617" class="blob-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>$http<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L618" class="blob-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>SatellizerPopup<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L619" class="blob-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>SatellizerConfig<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L620" class="blob-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>SatellizerUtils<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L621" class="blob-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">function</span>(<span class="pl-smi">$q</span>, <span class="pl-smi">$http</span>, <span class="pl-smi">popup</span>, <span class="pl-smi">config</span>, <span class="pl-smi">utils</span>) {</td>
      </tr>
      <tr>
        <td id="L622" class="blob-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L623" class="blob-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> Oauth1 <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L624" class="blob-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L625" class="blob-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> defaults <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L626" class="blob-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-code blob-code-inner js-file-line">            url<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L627" class="blob-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-code blob-code-inner js-file-line">            name<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L628" class="blob-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-code blob-code-inner js-file-line">            popupOptions<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L629" class="blob-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-code blob-code-inner js-file-line">            redirectUri<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L630" class="blob-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-code blob-code-inner js-file-line">            authorizationEndpoint<span class="pl-k">:</span> <span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L631" class="blob-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-code blob-code-inner js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L632" class="blob-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L633" class="blob-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">Oauth1</span>.<span class="pl-en">open</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">options</span>, <span class="pl-smi">userData</span>) {</td>
      </tr>
      <tr>
        <td id="L634" class="blob-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">angular</span>.<span class="pl-en">extend</span>(defaults, options);</td>
      </tr>
      <tr>
        <td id="L635" class="blob-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> popupWindow;</td>
      </tr>
      <tr>
        <td id="L636" class="blob-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> serverUrl <span class="pl-k">=</span> <span class="pl-smi">config</span>.<span class="pl-smi">baseUrl</span> <span class="pl-k">?</span> <span class="pl-smi">utils</span>.<span class="pl-en">joinUrl</span>(<span class="pl-smi">config</span>.<span class="pl-smi">baseUrl</span>, <span class="pl-smi">defaults</span>.<span class="pl-smi">url</span>) <span class="pl-k">:</span> <span class="pl-smi">defaults</span>.<span class="pl-smi">url</span>;</td>
      </tr>
      <tr>
        <td id="L637" class="blob-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L638" class="blob-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">window</span>.<span class="pl-smi">cordova</span>) {</td>
      </tr>
      <tr>
        <td id="L639" class="blob-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-code blob-code-inner js-file-line">                popupWindow <span class="pl-k">=</span> <span class="pl-smi">popup</span>.<span class="pl-c1">open</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>, <span class="pl-smi">defaults</span>.<span class="pl-c1">name</span>, <span class="pl-smi">defaults</span>.<span class="pl-smi">popupOptions</span>, <span class="pl-smi">defaults</span>.<span class="pl-smi">redirectUri</span>);</td>
      </tr>
      <tr>
        <td id="L640" class="blob-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L641" class="blob-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L642" class="blob-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">$http</span>.<span class="pl-en">post</span>(serverUrl, defaults)</td>
      </tr>
      <tr>
        <td id="L643" class="blob-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-code blob-code-inner js-file-line">              .<span class="pl-en">then</span>(<span class="pl-k">function</span>(<span class="pl-smi">response</span>) {</td>
      </tr>
      <tr>
        <td id="L644" class="blob-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> url <span class="pl-k">=</span> [<span class="pl-smi">defaults</span>.<span class="pl-smi">authorizationEndpoint</span>, <span class="pl-smi">Oauth1</span>.<span class="pl-en">buildQueryString</span>(<span class="pl-smi">response</span>.<span class="pl-c1">data</span>)].<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>?<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L645" class="blob-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L646" class="blob-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-c1">window</span>.<span class="pl-smi">cordova</span>) {</td>
      </tr>
      <tr>
        <td id="L647" class="blob-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-code blob-code-inner js-file-line">                  popupWindow <span class="pl-k">=</span> <span class="pl-smi">popup</span>.<span class="pl-c1">open</span>(url, <span class="pl-smi">defaults</span>.<span class="pl-c1">name</span>, <span class="pl-smi">defaults</span>.<span class="pl-smi">popupOptions</span>, <span class="pl-smi">defaults</span>.<span class="pl-smi">redirectUri</span>);</td>
      </tr>
      <tr>
        <td id="L648" class="blob-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-code blob-code-inner js-file-line">                } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L649" class="blob-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-code blob-code-inner js-file-line">                  <span class="pl-smi">popupWindow</span>.<span class="pl-smi">popupWindow</span>.<span class="pl-c1">location</span> <span class="pl-k">=</span> url;</td>
      </tr>
      <tr>
        <td id="L650" class="blob-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L651" class="blob-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L652" class="blob-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> popupListener;</td>
      </tr>
      <tr>
        <td id="L653" class="blob-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L654" class="blob-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-c1">window</span>.<span class="pl-smi">cordova</span>) {</td>
      </tr>
      <tr>
        <td id="L655" class="blob-num js-line-number" data-line-number="655"></td>
        <td id="LC655" class="blob-code blob-code-inner js-file-line">                  popupListener <span class="pl-k">=</span> <span class="pl-smi">popupWindow</span>.<span class="pl-en">eventListener</span>(<span class="pl-smi">defaults</span>.<span class="pl-smi">redirectUri</span>);</td>
      </tr>
      <tr>
        <td id="L656" class="blob-num js-line-number" data-line-number="656"></td>
        <td id="LC656" class="blob-code blob-code-inner js-file-line">                } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L657" class="blob-num js-line-number" data-line-number="657"></td>
        <td id="LC657" class="blob-code blob-code-inner js-file-line">                  popupListener <span class="pl-k">=</span> <span class="pl-smi">popupWindow</span>.<span class="pl-en">pollPopup</span>(<span class="pl-smi">defaults</span>.<span class="pl-smi">redirectUri</span>);</td>
      </tr>
      <tr>
        <td id="L658" class="blob-num js-line-number" data-line-number="658"></td>
        <td id="LC658" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L659" class="blob-num js-line-number" data-line-number="659"></td>
        <td id="LC659" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L660" class="blob-num js-line-number" data-line-number="660"></td>
        <td id="LC660" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> popupListener</td>
      </tr>
      <tr>
        <td id="L661" class="blob-num js-line-number" data-line-number="661"></td>
        <td id="LC661" class="blob-code blob-code-inner js-file-line">                  .<span class="pl-en">then</span>(<span class="pl-k">function</span>(<span class="pl-smi">response</span>) {</td>
      </tr>
      <tr>
        <td id="L662" class="blob-num js-line-number" data-line-number="662"></td>
        <td id="LC662" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> <span class="pl-smi">Oauth1</span>.<span class="pl-en">exchangeForToken</span>(response, userData);</td>
      </tr>
      <tr>
        <td id="L663" class="blob-num js-line-number" data-line-number="663"></td>
        <td id="LC663" class="blob-code blob-code-inner js-file-line">                  });</td>
      </tr>
      <tr>
        <td id="L664" class="blob-num js-line-number" data-line-number="664"></td>
        <td id="LC664" class="blob-code blob-code-inner js-file-line">              });</td>
      </tr>
      <tr>
        <td id="L665" class="blob-num js-line-number" data-line-number="665"></td>
        <td id="LC665" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L666" class="blob-num js-line-number" data-line-number="666"></td>
        <td id="LC666" class="blob-code blob-code-inner js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L667" class="blob-num js-line-number" data-line-number="667"></td>
        <td id="LC667" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L668" class="blob-num js-line-number" data-line-number="668"></td>
        <td id="LC668" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">Oauth1</span>.<span class="pl-en">exchangeForToken</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">oauthData</span>, <span class="pl-smi">userData</span>) {</td>
      </tr>
      <tr>
        <td id="L669" class="blob-num js-line-number" data-line-number="669"></td>
        <td id="LC669" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> data <span class="pl-k">=</span> <span class="pl-smi">angular</span>.<span class="pl-en">extend</span>({}, userData, oauthData);</td>
      </tr>
      <tr>
        <td id="L670" class="blob-num js-line-number" data-line-number="670"></td>
        <td id="LC670" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> exchangeForTokenUrl <span class="pl-k">=</span> <span class="pl-smi">config</span>.<span class="pl-smi">baseUrl</span> <span class="pl-k">?</span> <span class="pl-smi">utils</span>.<span class="pl-en">joinUrl</span>(<span class="pl-smi">config</span>.<span class="pl-smi">baseUrl</span>, <span class="pl-smi">defaults</span>.<span class="pl-smi">url</span>) <span class="pl-k">:</span> <span class="pl-smi">defaults</span>.<span class="pl-smi">url</span>;</td>
      </tr>
      <tr>
        <td id="L671" class="blob-num js-line-number" data-line-number="671"></td>
        <td id="LC671" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">$http</span>.<span class="pl-en">post</span>(exchangeForTokenUrl, data, { withCredentials<span class="pl-k">:</span> <span class="pl-smi">config</span>.<span class="pl-smi">withCredentials</span> });</td>
      </tr>
      <tr>
        <td id="L672" class="blob-num js-line-number" data-line-number="672"></td>
        <td id="LC672" class="blob-code blob-code-inner js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L673" class="blob-num js-line-number" data-line-number="673"></td>
        <td id="LC673" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L674" class="blob-num js-line-number" data-line-number="674"></td>
        <td id="LC674" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">Oauth1</span>.<span class="pl-en">buildQueryString</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L675" class="blob-num js-line-number" data-line-number="675"></td>
        <td id="LC675" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> str <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L676" class="blob-num js-line-number" data-line-number="676"></td>
        <td id="LC676" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L677" class="blob-num js-line-number" data-line-number="677"></td>
        <td id="LC677" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">angular</span>.<span class="pl-en">forEach</span>(obj, <span class="pl-k">function</span>(<span class="pl-smi">value</span>, <span class="pl-smi">key</span>) {</td>
      </tr>
      <tr>
        <td id="L678" class="blob-num js-line-number" data-line-number="678"></td>
        <td id="LC678" class="blob-code blob-code-inner js-file-line">              <span class="pl-smi">str</span>.<span class="pl-c1">push</span>(<span class="pl-c1">encodeURIComponent</span>(key) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>=<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">encodeURIComponent</span>(value));</td>
      </tr>
      <tr>
        <td id="L679" class="blob-num js-line-number" data-line-number="679"></td>
        <td id="LC679" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L680" class="blob-num js-line-number" data-line-number="680"></td>
        <td id="LC680" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L681" class="blob-num js-line-number" data-line-number="681"></td>
        <td id="LC681" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">str</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&amp;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L682" class="blob-num js-line-number" data-line-number="682"></td>
        <td id="LC682" class="blob-code blob-code-inner js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L683" class="blob-num js-line-number" data-line-number="683"></td>
        <td id="LC683" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L684" class="blob-num js-line-number" data-line-number="684"></td>
        <td id="LC684" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> Oauth1;</td>
      </tr>
      <tr>
        <td id="L685" class="blob-num js-line-number" data-line-number="685"></td>
        <td id="LC685" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L686" class="blob-num js-line-number" data-line-number="686"></td>
        <td id="LC686" class="blob-code blob-code-inner js-file-line">      }])</td>
      </tr>
      <tr>
        <td id="L687" class="blob-num js-line-number" data-line-number="687"></td>
        <td id="LC687" class="blob-code blob-code-inner js-file-line">    .<span class="pl-en">factory</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>SatellizerPopup<span class="pl-pds">&#39;</span></span>, [</td>
      </tr>
      <tr>
        <td id="L688" class="blob-num js-line-number" data-line-number="688"></td>
        <td id="LC688" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>$q<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L689" class="blob-num js-line-number" data-line-number="689"></td>
        <td id="LC689" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>$interval<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L690" class="blob-num js-line-number" data-line-number="690"></td>
        <td id="LC690" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>$window<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L691" class="blob-num js-line-number" data-line-number="691"></td>
        <td id="LC691" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>SatellizerConfig<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L692" class="blob-num js-line-number" data-line-number="692"></td>
        <td id="LC692" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>SatellizerUtils<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L693" class="blob-num js-line-number" data-line-number="693"></td>
        <td id="LC693" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">function</span>(<span class="pl-smi">$q</span>, <span class="pl-smi">$interval</span>, <span class="pl-smi">$window</span>, <span class="pl-smi">config</span>, <span class="pl-smi">utils</span>) {</td>
      </tr>
      <tr>
        <td id="L694" class="blob-num js-line-number" data-line-number="694"></td>
        <td id="LC694" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> Popup <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L695" class="blob-num js-line-number" data-line-number="695"></td>
        <td id="LC695" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L696" class="blob-num js-line-number" data-line-number="696"></td>
        <td id="LC696" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">Popup</span>.<span class="pl-smi">url</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L697" class="blob-num js-line-number" data-line-number="697"></td>
        <td id="LC697" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">Popup</span>.<span class="pl-smi">popupWindow</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L698" class="blob-num js-line-number" data-line-number="698"></td>
        <td id="LC698" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L699" class="blob-num js-line-number" data-line-number="699"></td>
        <td id="LC699" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">Popup</span>.<span class="pl-en">open</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">url</span>, <span class="pl-smi">name</span>, <span class="pl-smi">options</span>) {</td>
      </tr>
      <tr>
        <td id="L700" class="blob-num js-line-number" data-line-number="700"></td>
        <td id="LC700" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">Popup</span>.<span class="pl-smi">url</span> <span class="pl-k">=</span> url;</td>
      </tr>
      <tr>
        <td id="L701" class="blob-num js-line-number" data-line-number="701"></td>
        <td id="LC701" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L702" class="blob-num js-line-number" data-line-number="702"></td>
        <td id="LC702" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> stringifiedOptions <span class="pl-k">=</span> <span class="pl-smi">Popup</span>.<span class="pl-en">stringifyOptions</span>(<span class="pl-smi">Popup</span>.<span class="pl-en">prepareOptions</span>(options));</td>
      </tr>
      <tr>
        <td id="L703" class="blob-num js-line-number" data-line-number="703"></td>
        <td id="LC703" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> <span class="pl-c1">UA</span> <span class="pl-k">=</span> <span class="pl-smi">$window</span>.<span class="pl-smi">navigator</span>.<span class="pl-c1">userAgent</span>;</td>
      </tr>
      <tr>
        <td id="L704" class="blob-num js-line-number" data-line-number="704"></td>
        <td id="LC704" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> windowName <span class="pl-k">=</span> (<span class="pl-c1">window</span>.<span class="pl-smi">cordova</span> <span class="pl-k">||</span> <span class="pl-c1">UA</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>CriOS<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&gt;</span> <span class="pl-k">-</span><span class="pl-c1">1</span>) <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>_blank<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> name;</td>
      </tr>
      <tr>
        <td id="L705" class="blob-num js-line-number" data-line-number="705"></td>
        <td id="LC705" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L706" class="blob-num js-line-number" data-line-number="706"></td>
        <td id="LC706" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">Popup</span>.<span class="pl-smi">popupWindow</span> <span class="pl-k">=</span> <span class="pl-smi">$window</span>.<span class="pl-c1">open</span>(url, windowName, stringifiedOptions);</td>
      </tr>
      <tr>
        <td id="L707" class="blob-num js-line-number" data-line-number="707"></td>
        <td id="LC707" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L708" class="blob-num js-line-number" data-line-number="708"></td>
        <td id="LC708" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">$window</span>.<span class="pl-smi">popup</span> <span class="pl-k">=</span> <span class="pl-smi">Popup</span>.<span class="pl-smi">popupWindow</span>;</td>
      </tr>
      <tr>
        <td id="L709" class="blob-num js-line-number" data-line-number="709"></td>
        <td id="LC709" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L710" class="blob-num js-line-number" data-line-number="710"></td>
        <td id="LC710" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (<span class="pl-smi">Popup</span>.<span class="pl-smi">popupWindow</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">Popup</span>.<span class="pl-smi">popupWindow</span>.<span class="pl-smi">focus</span>) {</td>
      </tr>
      <tr>
        <td id="L711" class="blob-num js-line-number" data-line-number="711"></td>
        <td id="LC711" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">Popup</span>.<span class="pl-smi">popupWindow</span>.<span class="pl-c1">focus</span>();</td>
      </tr>
      <tr>
        <td id="L712" class="blob-num js-line-number" data-line-number="712"></td>
        <td id="LC712" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L713" class="blob-num js-line-number" data-line-number="713"></td>
        <td id="LC713" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L714" class="blob-num js-line-number" data-line-number="714"></td>
        <td id="LC714" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> Popup;</td>
      </tr>
      <tr>
        <td id="L715" class="blob-num js-line-number" data-line-number="715"></td>
        <td id="LC715" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L716" class="blob-num js-line-number" data-line-number="716"></td>
        <td id="LC716" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L717" class="blob-num js-line-number" data-line-number="717"></td>
        <td id="LC717" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">Popup</span>.<span class="pl-en">eventListener</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">redirectUri</span>) {</td>
      </tr>
      <tr>
        <td id="L718" class="blob-num js-line-number" data-line-number="718"></td>
        <td id="LC718" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> deferred <span class="pl-k">=</span> <span class="pl-smi">$q</span>.<span class="pl-c1">defer</span>();</td>
      </tr>
      <tr>
        <td id="L719" class="blob-num js-line-number" data-line-number="719"></td>
        <td id="LC719" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L720" class="blob-num js-line-number" data-line-number="720"></td>
        <td id="LC720" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">Popup</span>.<span class="pl-smi">popupWindow</span>.<span class="pl-en">addEventListener</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>loadstart<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-c1">event</span>) {</td>
      </tr>
      <tr>
        <td id="L721" class="blob-num js-line-number" data-line-number="721"></td>
        <td id="LC721" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-c1">event</span>.<span class="pl-smi">url</span>.<span class="pl-c1">indexOf</span>(redirectUri) <span class="pl-k">!==</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L722" class="blob-num js-line-number" data-line-number="722"></td>
        <td id="LC722" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L723" class="blob-num js-line-number" data-line-number="723"></td>
        <td id="LC723" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L724" class="blob-num js-line-number" data-line-number="724"></td>
        <td id="LC724" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L725" class="blob-num js-line-number" data-line-number="725"></td>
        <td id="LC725" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> parser <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>a<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L726" class="blob-num js-line-number" data-line-number="726"></td>
        <td id="LC726" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">parser</span>.<span class="pl-c1">href</span> <span class="pl-k">=</span> <span class="pl-c1">event</span>.<span class="pl-smi">url</span>;</td>
      </tr>
      <tr>
        <td id="L727" class="blob-num js-line-number" data-line-number="727"></td>
        <td id="LC727" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L728" class="blob-num js-line-number" data-line-number="728"></td>
        <td id="LC728" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">parser</span>.<span class="pl-smi">search</span> <span class="pl-k">||</span> <span class="pl-smi">parser</span>.<span class="pl-c1">hash</span>) {</td>
      </tr>
      <tr>
        <td id="L729" class="blob-num js-line-number" data-line-number="729"></td>
        <td id="LC729" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">var</span> queryParams <span class="pl-k">=</span> <span class="pl-smi">parser</span>.<span class="pl-smi">search</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">1</span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\/</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L730" class="blob-num js-line-number" data-line-number="730"></td>
        <td id="LC730" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">var</span> hashParams <span class="pl-k">=</span> <span class="pl-smi">parser</span>.<span class="pl-c1">hash</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">1</span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\/</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L731" class="blob-num js-line-number" data-line-number="731"></td>
        <td id="LC731" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">var</span> hash <span class="pl-k">=</span> <span class="pl-smi">utils</span>.<span class="pl-en">parseQueryString</span>(hashParams);</td>
      </tr>
      <tr>
        <td id="L732" class="blob-num js-line-number" data-line-number="732"></td>
        <td id="LC732" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">var</span> qs <span class="pl-k">=</span> <span class="pl-smi">utils</span>.<span class="pl-en">parseQueryString</span>(queryParams);</td>
      </tr>
      <tr>
        <td id="L733" class="blob-num js-line-number" data-line-number="733"></td>
        <td id="LC733" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L734" class="blob-num js-line-number" data-line-number="734"></td>
        <td id="LC734" class="blob-code blob-code-inner js-file-line">              <span class="pl-smi">angular</span>.<span class="pl-en">extend</span>(qs, hash);</td>
      </tr>
      <tr>
        <td id="L735" class="blob-num js-line-number" data-line-number="735"></td>
        <td id="LC735" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L736" class="blob-num js-line-number" data-line-number="736"></td>
        <td id="LC736" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">qs</span>.<span class="pl-smi">error</span>) {</td>
      </tr>
      <tr>
        <td id="L737" class="blob-num js-line-number" data-line-number="737"></td>
        <td id="LC737" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">deferred</span>.<span class="pl-en">resolve</span>(qs);</td>
      </tr>
      <tr>
        <td id="L738" class="blob-num js-line-number" data-line-number="738"></td>
        <td id="LC738" class="blob-code blob-code-inner js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L739" class="blob-num js-line-number" data-line-number="739"></td>
        <td id="LC739" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L740" class="blob-num js-line-number" data-line-number="740"></td>
        <td id="LC740" class="blob-code blob-code-inner js-file-line">              <span class="pl-smi">Popup</span>.<span class="pl-smi">popupWindow</span>.<span class="pl-c1">close</span>();</td>
      </tr>
      <tr>
        <td id="L741" class="blob-num js-line-number" data-line-number="741"></td>
        <td id="LC741" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L742" class="blob-num js-line-number" data-line-number="742"></td>
        <td id="LC742" class="blob-code blob-code-inner js-file-line">          });</td>
      </tr>
      <tr>
        <td id="L743" class="blob-num js-line-number" data-line-number="743"></td>
        <td id="LC743" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L744" class="blob-num js-line-number" data-line-number="744"></td>
        <td id="LC744" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">Popup</span>.<span class="pl-smi">popupWindow</span>.<span class="pl-en">addEventListener</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>loaderror<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L745" class="blob-num js-line-number" data-line-number="745"></td>
        <td id="LC745" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">deferred</span>.<span class="pl-en">reject</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Authorization Failed<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L746" class="blob-num js-line-number" data-line-number="746"></td>
        <td id="LC746" class="blob-code blob-code-inner js-file-line">          });</td>
      </tr>
      <tr>
        <td id="L747" class="blob-num js-line-number" data-line-number="747"></td>
        <td id="LC747" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L748" class="blob-num js-line-number" data-line-number="748"></td>
        <td id="LC748" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-smi">deferred</span>.<span class="pl-smi">promise</span>;</td>
      </tr>
      <tr>
        <td id="L749" class="blob-num js-line-number" data-line-number="749"></td>
        <td id="LC749" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L750" class="blob-num js-line-number" data-line-number="750"></td>
        <td id="LC750" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L751" class="blob-num js-line-number" data-line-number="751"></td>
        <td id="LC751" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">Popup</span>.<span class="pl-en">pollPopup</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">redirectUri</span>) {</td>
      </tr>
      <tr>
        <td id="L752" class="blob-num js-line-number" data-line-number="752"></td>
        <td id="LC752" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> deferred <span class="pl-k">=</span> <span class="pl-smi">$q</span>.<span class="pl-c1">defer</span>();</td>
      </tr>
      <tr>
        <td id="L753" class="blob-num js-line-number" data-line-number="753"></td>
        <td id="LC753" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L754" class="blob-num js-line-number" data-line-number="754"></td>
        <td id="LC754" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> redirectUriParser <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>a<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L755" class="blob-num js-line-number" data-line-number="755"></td>
        <td id="LC755" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">redirectUriParser</span>.<span class="pl-c1">href</span> <span class="pl-k">=</span> redirectUri;</td>
      </tr>
      <tr>
        <td id="L756" class="blob-num js-line-number" data-line-number="756"></td>
        <td id="LC756" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L757" class="blob-num js-line-number" data-line-number="757"></td>
        <td id="LC757" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> redirectUriPath <span class="pl-k">=</span> <span class="pl-smi">utils</span>.<span class="pl-en">getFullUrlPath</span>(redirectUriParser);</td>
      </tr>
      <tr>
        <td id="L758" class="blob-num js-line-number" data-line-number="758"></td>
        <td id="LC758" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L759" class="blob-num js-line-number" data-line-number="759"></td>
        <td id="LC759" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> polling <span class="pl-k">=</span> <span class="pl-en">$interval</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L760" class="blob-num js-line-number" data-line-number="760"></td>
        <td id="LC760" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">Popup</span>.<span class="pl-smi">popupWindow</span> <span class="pl-k">||</span> <span class="pl-smi">Popup</span>.<span class="pl-smi">popupWindow</span>.<span class="pl-c1">closed</span> <span class="pl-k">||</span> <span class="pl-smi">Popup</span>.<span class="pl-smi">popupWindow</span>.<span class="pl-c1">closed</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L761" class="blob-num js-line-number" data-line-number="761"></td>
        <td id="LC761" class="blob-code blob-code-inner js-file-line">              <span class="pl-smi">deferred</span>.<span class="pl-en">reject</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>The popup window was closed.<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L762" class="blob-num js-line-number" data-line-number="762"></td>
        <td id="LC762" class="blob-code blob-code-inner js-file-line">              <span class="pl-smi">$interval</span>.<span class="pl-en">cancel</span>(polling);</td>
      </tr>
      <tr>
        <td id="L763" class="blob-num js-line-number" data-line-number="763"></td>
        <td id="LC763" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L764" class="blob-num js-line-number" data-line-number="764"></td>
        <td id="LC764" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L765" class="blob-num js-line-number" data-line-number="765"></td>
        <td id="LC765" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L766" class="blob-num js-line-number" data-line-number="766"></td>
        <td id="LC766" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">var</span> popupWindowPath <span class="pl-k">=</span> <span class="pl-smi">utils</span>.<span class="pl-en">getFullUrlPath</span>(<span class="pl-smi">Popup</span>.<span class="pl-smi">popupWindow</span>.<span class="pl-c1">location</span>);</td>
      </tr>
      <tr>
        <td id="L767" class="blob-num js-line-number" data-line-number="767"></td>
        <td id="LC767" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L768" class="blob-num js-line-number" data-line-number="768"></td>
        <td id="LC768" class="blob-code blob-code-inner js-file-line">              <span class="pl-c">// Redirect has occurred.</span></td>
      </tr>
      <tr>
        <td id="L769" class="blob-num js-line-number" data-line-number="769"></td>
        <td id="LC769" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span> (popupWindowPath <span class="pl-k">===</span> redirectUriPath) {</td>
      </tr>
      <tr>
        <td id="L770" class="blob-num js-line-number" data-line-number="770"></td>
        <td id="LC770" class="blob-code blob-code-inner js-file-line">                <span class="pl-c">// Contains query/hash parameters as expected.</span></td>
      </tr>
      <tr>
        <td id="L771" class="blob-num js-line-number" data-line-number="771"></td>
        <td id="LC771" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-smi">Popup</span>.<span class="pl-smi">popupWindow</span>.<span class="pl-c1">location</span>.<span class="pl-smi">search</span> <span class="pl-k">||</span> <span class="pl-smi">Popup</span>.<span class="pl-smi">popupWindow</span>.<span class="pl-c1">location</span>.<span class="pl-c1">hash</span>) {</td>
      </tr>
      <tr>
        <td id="L772" class="blob-num js-line-number" data-line-number="772"></td>
        <td id="LC772" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">var</span> queryParams <span class="pl-k">=</span> <span class="pl-smi">Popup</span>.<span class="pl-smi">popupWindow</span>.<span class="pl-c1">location</span>.<span class="pl-smi">search</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">1</span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\/</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L773" class="blob-num js-line-number" data-line-number="773"></td>
        <td id="LC773" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">var</span> hashParams <span class="pl-k">=</span> <span class="pl-smi">Popup</span>.<span class="pl-smi">popupWindow</span>.<span class="pl-c1">location</span>.<span class="pl-c1">hash</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">1</span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\/</span>$]</span><span class="pl-pds">/</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L774" class="blob-num js-line-number" data-line-number="774"></td>
        <td id="LC774" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">var</span> hash <span class="pl-k">=</span> <span class="pl-smi">utils</span>.<span class="pl-en">parseQueryString</span>(hashParams);</td>
      </tr>
      <tr>
        <td id="L775" class="blob-num js-line-number" data-line-number="775"></td>
        <td id="LC775" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">var</span> qs <span class="pl-k">=</span> <span class="pl-smi">utils</span>.<span class="pl-en">parseQueryString</span>(queryParams);</td>
      </tr>
      <tr>
        <td id="L776" class="blob-num js-line-number" data-line-number="776"></td>
        <td id="LC776" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L777" class="blob-num js-line-number" data-line-number="777"></td>
        <td id="LC777" class="blob-code blob-code-inner js-file-line">                  <span class="pl-smi">angular</span>.<span class="pl-en">extend</span>(qs, hash);</td>
      </tr>
      <tr>
        <td id="L778" class="blob-num js-line-number" data-line-number="778"></td>
        <td id="LC778" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L779" class="blob-num js-line-number" data-line-number="779"></td>
        <td id="LC779" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">if</span> (<span class="pl-smi">qs</span>.<span class="pl-smi">error</span>) {</td>
      </tr>
      <tr>
        <td id="L780" class="blob-num js-line-number" data-line-number="780"></td>
        <td id="LC780" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">deferred</span>.<span class="pl-en">reject</span>(qs);</td>
      </tr>
      <tr>
        <td id="L781" class="blob-num js-line-number" data-line-number="781"></td>
        <td id="LC781" class="blob-code blob-code-inner js-file-line">                  } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L782" class="blob-num js-line-number" data-line-number="782"></td>
        <td id="LC782" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">deferred</span>.<span class="pl-en">resolve</span>(qs);</td>
      </tr>
      <tr>
        <td id="L783" class="blob-num js-line-number" data-line-number="783"></td>
        <td id="LC783" class="blob-code blob-code-inner js-file-line">                  }</td>
      </tr>
      <tr>
        <td id="L784" class="blob-num js-line-number" data-line-number="784"></td>
        <td id="LC784" class="blob-code blob-code-inner js-file-line">                } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L785" class="blob-num js-line-number" data-line-number="785"></td>
        <td id="LC785" class="blob-code blob-code-inner js-file-line">                  <span class="pl-c">// Does not contain query/hash parameters, can&#39;t do anything at this point.</span></td>
      </tr>
      <tr>
        <td id="L786" class="blob-num js-line-number" data-line-number="786"></td>
        <td id="LC786" class="blob-code blob-code-inner js-file-line">                  <span class="pl-smi">deferred</span>.<span class="pl-en">reject</span>(</td>
      </tr>
      <tr>
        <td id="L787" class="blob-num js-line-number" data-line-number="787"></td>
        <td id="LC787" class="blob-code blob-code-inner js-file-line">                    <span class="pl-s"><span class="pl-pds">&#39;</span>Redirect has occurred but no query or hash parameters were found. <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L788" class="blob-num js-line-number" data-line-number="788"></td>
        <td id="LC788" class="blob-code blob-code-inner js-file-line">                    <span class="pl-s"><span class="pl-pds">&#39;</span>They were either not set during the redirect, or were removed before Satellizer <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L789" class="blob-num js-line-number" data-line-number="789"></td>
        <td id="LC789" class="blob-code blob-code-inner js-file-line">                    <span class="pl-s"><span class="pl-pds">&#39;</span>could read them, e.g. AngularJS routing mechanism.<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L790" class="blob-num js-line-number" data-line-number="790"></td>
        <td id="LC790" class="blob-code blob-code-inner js-file-line">                  );</td>
      </tr>
      <tr>
        <td id="L791" class="blob-num js-line-number" data-line-number="791"></td>
        <td id="LC791" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L792" class="blob-num js-line-number" data-line-number="792"></td>
        <td id="LC792" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L793" class="blob-num js-line-number" data-line-number="793"></td>
        <td id="LC793" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">$interval</span>.<span class="pl-en">cancel</span>(polling);</td>
      </tr>
      <tr>
        <td id="L794" class="blob-num js-line-number" data-line-number="794"></td>
        <td id="LC794" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">Popup</span>.<span class="pl-smi">popupWindow</span>.<span class="pl-c1">close</span>();</td>
      </tr>
      <tr>
        <td id="L795" class="blob-num js-line-number" data-line-number="795"></td>
        <td id="LC795" class="blob-code blob-code-inner js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L796" class="blob-num js-line-number" data-line-number="796"></td>
        <td id="LC796" class="blob-code blob-code-inner js-file-line">            } <span class="pl-k">catch</span> (error) {</td>
      </tr>
      <tr>
        <td id="L797" class="blob-num js-line-number" data-line-number="797"></td>
        <td id="LC797" class="blob-code blob-code-inner js-file-line">              <span class="pl-c">// Ignore DOMException: Blocked a frame with origin from accessing a cross-origin frame.</span></td>
      </tr>
      <tr>
        <td id="L798" class="blob-num js-line-number" data-line-number="798"></td>
        <td id="LC798" class="blob-code blob-code-inner js-file-line">              <span class="pl-c">// A hack to get around same-origin security policy errors in IE.</span></td>
      </tr>
      <tr>
        <td id="L799" class="blob-num js-line-number" data-line-number="799"></td>
        <td id="LC799" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L800" class="blob-num js-line-number" data-line-number="800"></td>
        <td id="LC800" class="blob-code blob-code-inner js-file-line">          }, <span class="pl-c1">20</span>);</td>
      </tr>
      <tr>
        <td id="L801" class="blob-num js-line-number" data-line-number="801"></td>
        <td id="LC801" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L802" class="blob-num js-line-number" data-line-number="802"></td>
        <td id="LC802" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-smi">deferred</span>.<span class="pl-smi">promise</span>;</td>
      </tr>
      <tr>
        <td id="L803" class="blob-num js-line-number" data-line-number="803"></td>
        <td id="LC803" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L804" class="blob-num js-line-number" data-line-number="804"></td>
        <td id="LC804" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L805" class="blob-num js-line-number" data-line-number="805"></td>
        <td id="LC805" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">Popup</span>.<span class="pl-en">prepareOptions</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">options</span>) {</td>
      </tr>
      <tr>
        <td id="L806" class="blob-num js-line-number" data-line-number="806"></td>
        <td id="LC806" class="blob-code blob-code-inner js-file-line">          options <span class="pl-k">=</span> options <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L807" class="blob-num js-line-number" data-line-number="807"></td>
        <td id="LC807" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> width <span class="pl-k">=</span> <span class="pl-smi">options</span>.<span class="pl-c1">width</span> <span class="pl-k">||</span> <span class="pl-c1">500</span>;</td>
      </tr>
      <tr>
        <td id="L808" class="blob-num js-line-number" data-line-number="808"></td>
        <td id="LC808" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> height <span class="pl-k">=</span> <span class="pl-smi">options</span>.<span class="pl-c1">height</span> <span class="pl-k">||</span> <span class="pl-c1">500</span>;</td>
      </tr>
      <tr>
        <td id="L809" class="blob-num js-line-number" data-line-number="809"></td>
        <td id="LC809" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L810" class="blob-num js-line-number" data-line-number="810"></td>
        <td id="LC810" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-smi">angular</span>.<span class="pl-en">extend</span>({</td>
      </tr>
      <tr>
        <td id="L811" class="blob-num js-line-number" data-line-number="811"></td>
        <td id="LC811" class="blob-code blob-code-inner js-file-line">            width<span class="pl-k">:</span> width,</td>
      </tr>
      <tr>
        <td id="L812" class="blob-num js-line-number" data-line-number="812"></td>
        <td id="LC812" class="blob-code blob-code-inner js-file-line">            height<span class="pl-k">:</span> height,</td>
      </tr>
      <tr>
        <td id="L813" class="blob-num js-line-number" data-line-number="813"></td>
        <td id="LC813" class="blob-code blob-code-inner js-file-line">            left<span class="pl-k">:</span> <span class="pl-smi">$window</span>.<span class="pl-c1">screenX</span> <span class="pl-k">+</span> ((<span class="pl-smi">$window</span>.<span class="pl-c1">outerWidth</span> <span class="pl-k">-</span> width) <span class="pl-k">/</span> <span class="pl-c1">2</span>),</td>
      </tr>
      <tr>
        <td id="L814" class="blob-num js-line-number" data-line-number="814"></td>
        <td id="LC814" class="blob-code blob-code-inner js-file-line">            top<span class="pl-k">:</span> <span class="pl-smi">$window</span>.<span class="pl-c1">screenY</span> <span class="pl-k">+</span> ((<span class="pl-smi">$window</span>.<span class="pl-c1">outerHeight</span> <span class="pl-k">-</span> height) <span class="pl-k">/</span> <span class="pl-c1">2.5</span>)</td>
      </tr>
      <tr>
        <td id="L815" class="blob-num js-line-number" data-line-number="815"></td>
        <td id="LC815" class="blob-code blob-code-inner js-file-line">          }, options);</td>
      </tr>
      <tr>
        <td id="L816" class="blob-num js-line-number" data-line-number="816"></td>
        <td id="LC816" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L817" class="blob-num js-line-number" data-line-number="817"></td>
        <td id="LC817" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L818" class="blob-num js-line-number" data-line-number="818"></td>
        <td id="LC818" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">Popup</span>.<span class="pl-en">stringifyOptions</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">options</span>) {</td>
      </tr>
      <tr>
        <td id="L819" class="blob-num js-line-number" data-line-number="819"></td>
        <td id="LC819" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> parts <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L820" class="blob-num js-line-number" data-line-number="820"></td>
        <td id="LC820" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">angular</span>.<span class="pl-en">forEach</span>(options, <span class="pl-k">function</span>(<span class="pl-smi">value</span>, <span class="pl-smi">key</span>) {</td>
      </tr>
      <tr>
        <td id="L821" class="blob-num js-line-number" data-line-number="821"></td>
        <td id="LC821" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">parts</span>.<span class="pl-c1">push</span>(key <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>=<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> value);</td>
      </tr>
      <tr>
        <td id="L822" class="blob-num js-line-number" data-line-number="822"></td>
        <td id="LC822" class="blob-code blob-code-inner js-file-line">          });</td>
      </tr>
      <tr>
        <td id="L823" class="blob-num js-line-number" data-line-number="823"></td>
        <td id="LC823" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-smi">parts</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>,<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L824" class="blob-num js-line-number" data-line-number="824"></td>
        <td id="LC824" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L825" class="blob-num js-line-number" data-line-number="825"></td>
        <td id="LC825" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L826" class="blob-num js-line-number" data-line-number="826"></td>
        <td id="LC826" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> Popup;</td>
      </tr>
      <tr>
        <td id="L827" class="blob-num js-line-number" data-line-number="827"></td>
        <td id="LC827" class="blob-code blob-code-inner js-file-line">      }])</td>
      </tr>
      <tr>
        <td id="L828" class="blob-num js-line-number" data-line-number="828"></td>
        <td id="LC828" class="blob-code blob-code-inner js-file-line">    .<span class="pl-en">service</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>SatellizerUtils<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L829" class="blob-num js-line-number" data-line-number="829"></td>
        <td id="LC829" class="blob-code blob-code-inner js-file-line">      <span class="pl-v">this</span>.<span class="pl-en">getFullUrlPath</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">location</span>) {</td>
      </tr>
      <tr>
        <td id="L830" class="blob-num js-line-number" data-line-number="830"></td>
        <td id="LC830" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> isHttps <span class="pl-k">=</span> <span class="pl-smi">location</span>.<span class="pl-c1">protocol</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>https:<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L831" class="blob-num js-line-number" data-line-number="831"></td>
        <td id="LC831" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-smi">location</span>.<span class="pl-c1">protocol</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>//<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">location</span>.<span class="pl-c1">hostname</span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L832" class="blob-num js-line-number" data-line-number="832"></td>
        <td id="LC832" class="blob-code blob-code-inner js-file-line">          <span class="pl-s"><span class="pl-pds">&#39;</span>:<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> (<span class="pl-smi">location</span>.<span class="pl-c1">port</span> <span class="pl-k">||</span> (isHttps <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>443<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>80<span class="pl-pds">&#39;</span></span>)) <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L833" class="blob-num js-line-number" data-line-number="833"></td>
        <td id="LC833" class="blob-code blob-code-inner js-file-line">          (<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-cce">\/</span><span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(<span class="pl-smi">location</span>.<span class="pl-c1">pathname</span>) <span class="pl-k">?</span> <span class="pl-smi">location</span>.<span class="pl-c1">pathname</span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">location</span>.<span class="pl-c1">pathname</span>);</td>
      </tr>
      <tr>
        <td id="L834" class="blob-num js-line-number" data-line-number="834"></td>
        <td id="LC834" class="blob-code blob-code-inner js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L835" class="blob-num js-line-number" data-line-number="835"></td>
        <td id="LC835" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L836" class="blob-num js-line-number" data-line-number="836"></td>
        <td id="LC836" class="blob-code blob-code-inner js-file-line">      <span class="pl-v">this</span>.<span class="pl-en">camelCase</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">name</span>) {</td>
      </tr>
      <tr>
        <td id="L837" class="blob-num js-line-number" data-line-number="837"></td>
        <td id="LC837" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-smi">name</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>(<span class="pl-c1">[<span class="pl-cce">\:</span><span class="pl-c1">\-<span class="pl-cce">\_</span></span>]</span><span class="pl-k">+</span>(<span class="pl-c1">.</span>))<span class="pl-pds">/</span>g</span>, <span class="pl-k">function</span>(<span class="pl-smi">_</span>, <span class="pl-smi">separator</span>, <span class="pl-smi">letter</span>, <span class="pl-smi">offset</span>) {</td>
      </tr>
      <tr>
        <td id="L838" class="blob-num js-line-number" data-line-number="838"></td>
        <td id="LC838" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> offset <span class="pl-k">?</span> <span class="pl-smi">letter</span>.<span class="pl-c1">toUpperCase</span>() <span class="pl-k">:</span> letter;</td>
      </tr>
      <tr>
        <td id="L839" class="blob-num js-line-number" data-line-number="839"></td>
        <td id="LC839" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L840" class="blob-num js-line-number" data-line-number="840"></td>
        <td id="LC840" class="blob-code blob-code-inner js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L841" class="blob-num js-line-number" data-line-number="841"></td>
        <td id="LC841" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L842" class="blob-num js-line-number" data-line-number="842"></td>
        <td id="LC842" class="blob-code blob-code-inner js-file-line">      <span class="pl-v">this</span>.<span class="pl-en">parseQueryString</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">keyValue</span>) {</td>
      </tr>
      <tr>
        <td id="L843" class="blob-num js-line-number" data-line-number="843"></td>
        <td id="LC843" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> obj <span class="pl-k">=</span> {}, key, value;</td>
      </tr>
      <tr>
        <td id="L844" class="blob-num js-line-number" data-line-number="844"></td>
        <td id="LC844" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">angular</span>.<span class="pl-en">forEach</span>((keyValue <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>).<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&amp;<span class="pl-pds">&#39;</span></span>), <span class="pl-k">function</span>(<span class="pl-smi">keyValue</span>) {</td>
      </tr>
      <tr>
        <td id="L845" class="blob-num js-line-number" data-line-number="845"></td>
        <td id="LC845" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (keyValue) {</td>
      </tr>
      <tr>
        <td id="L846" class="blob-num js-line-number" data-line-number="846"></td>
        <td id="LC846" class="blob-code blob-code-inner js-file-line">            value <span class="pl-k">=</span> <span class="pl-smi">keyValue</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>=<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L847" class="blob-num js-line-number" data-line-number="847"></td>
        <td id="LC847" class="blob-code blob-code-inner js-file-line">            key <span class="pl-k">=</span> <span class="pl-c1">decodeURIComponent</span>(value[<span class="pl-c1">0</span>]);</td>
      </tr>
      <tr>
        <td id="L848" class="blob-num js-line-number" data-line-number="848"></td>
        <td id="LC848" class="blob-code blob-code-inner js-file-line">            obj[key] <span class="pl-k">=</span> <span class="pl-smi">angular</span>.<span class="pl-en">isDefined</span>(value[<span class="pl-c1">1</span>]) <span class="pl-k">?</span> <span class="pl-c1">decodeURIComponent</span>(value[<span class="pl-c1">1</span>]) <span class="pl-k">:</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L849" class="blob-num js-line-number" data-line-number="849"></td>
        <td id="LC849" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L850" class="blob-num js-line-number" data-line-number="850"></td>
        <td id="LC850" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L851" class="blob-num js-line-number" data-line-number="851"></td>
        <td id="LC851" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> obj;</td>
      </tr>
      <tr>
        <td id="L852" class="blob-num js-line-number" data-line-number="852"></td>
        <td id="LC852" class="blob-code blob-code-inner js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L853" class="blob-num js-line-number" data-line-number="853"></td>
        <td id="LC853" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L854" class="blob-num js-line-number" data-line-number="854"></td>
        <td id="LC854" class="blob-code blob-code-inner js-file-line">      <span class="pl-v">this</span>.<span class="pl-en">joinUrl</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">baseUrl</span>, <span class="pl-smi">url</span>) {</td>
      </tr>
      <tr>
        <td id="L855" class="blob-num js-line-number" data-line-number="855"></td>
        <td id="LC855" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:<span class="pl-c1">[<span class="pl-c1">a-z</span>]</span><span class="pl-k">+</span>:)<span class="pl-k">?</span><span class="pl-cce">\/\/</span><span class="pl-pds">/</span>i</span>.<span class="pl-c1">test</span>(url)) {</td>
      </tr>
      <tr>
        <td id="L856" class="blob-num js-line-number" data-line-number="856"></td>
        <td id="LC856" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> url;</td>
      </tr>
      <tr>
        <td id="L857" class="blob-num js-line-number" data-line-number="857"></td>
        <td id="LC857" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L858" class="blob-num js-line-number" data-line-number="858"></td>
        <td id="LC858" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L859" class="blob-num js-line-number" data-line-number="859"></td>
        <td id="LC859" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> joined <span class="pl-k">=</span> [baseUrl, url].<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L860" class="blob-num js-line-number" data-line-number="860"></td>
        <td id="LC860" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L861" class="blob-num js-line-number" data-line-number="861"></td>
        <td id="LC861" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> <span class="pl-en">normalize</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">str</span>) {</td>
      </tr>
      <tr>
        <td id="L862" class="blob-num js-line-number" data-line-number="862"></td>
        <td id="LC862" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> str</td>
      </tr>
      <tr>
        <td id="L863" class="blob-num js-line-number" data-line-number="863"></td>
        <td id="LC863" class="blob-code blob-code-inner js-file-line">            .<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\/</span>]</span><span class="pl-k">+</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L864" class="blob-num js-line-number" data-line-number="864"></td>
        <td id="LC864" class="blob-code blob-code-inner js-file-line">            .<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\/\?</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>?<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L865" class="blob-num js-line-number" data-line-number="865"></td>
        <td id="LC865" class="blob-code blob-code-inner js-file-line">            .<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\/\#</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L866" class="blob-num js-line-number" data-line-number="866"></td>
        <td id="LC866" class="blob-code blob-code-inner js-file-line">            .<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\:\/</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>://<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L867" class="blob-num js-line-number" data-line-number="867"></td>
        <td id="LC867" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L868" class="blob-num js-line-number" data-line-number="868"></td>
        <td id="LC868" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L869" class="blob-num js-line-number" data-line-number="869"></td>
        <td id="LC869" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-en">normalize</span>(joined);</td>
      </tr>
      <tr>
        <td id="L870" class="blob-num js-line-number" data-line-number="870"></td>
        <td id="LC870" class="blob-code blob-code-inner js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L871" class="blob-num js-line-number" data-line-number="871"></td>
        <td id="LC871" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L872" class="blob-num js-line-number" data-line-number="872"></td>
        <td id="LC872" class="blob-code blob-code-inner js-file-line">      <span class="pl-v">this</span>.<span class="pl-en">merge</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj1</span>, <span class="pl-smi">obj2</span>) {</td>
      </tr>
      <tr>
        <td id="L873" class="blob-num js-line-number" data-line-number="873"></td>
        <td id="LC873" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> result <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L874" class="blob-num js-line-number" data-line-number="874"></td>
        <td id="LC874" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">in</span> obj1) {</td>
      </tr>
      <tr>
        <td id="L875" class="blob-num js-line-number" data-line-number="875"></td>
        <td id="LC875" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (<span class="pl-smi">obj1</span>.<span class="pl-en">hasOwnProperty</span>(i)) {</td>
      </tr>
      <tr>
        <td id="L876" class="blob-num js-line-number" data-line-number="876"></td>
        <td id="LC876" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> ((i <span class="pl-k">in</span> obj2) <span class="pl-k">&amp;&amp;</span> (<span class="pl-k">typeof</span> obj1[i] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&amp;&amp;</span> (i <span class="pl-k">!==</span> <span class="pl-c1">null</span>)) {</td>
      </tr>
      <tr>
        <td id="L877" class="blob-num js-line-number" data-line-number="877"></td>
        <td id="LC877" class="blob-code blob-code-inner js-file-line">              result[i] <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-en">merge</span>(obj1[i], obj2[i]);</td>
      </tr>
      <tr>
        <td id="L878" class="blob-num js-line-number" data-line-number="878"></td>
        <td id="LC878" class="blob-code blob-code-inner js-file-line">            } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L879" class="blob-num js-line-number" data-line-number="879"></td>
        <td id="LC879" class="blob-code blob-code-inner js-file-line">              result[i] <span class="pl-k">=</span> obj1[i];</td>
      </tr>
      <tr>
        <td id="L880" class="blob-num js-line-number" data-line-number="880"></td>
        <td id="LC880" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L881" class="blob-num js-line-number" data-line-number="881"></td>
        <td id="LC881" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L882" class="blob-num js-line-number" data-line-number="882"></td>
        <td id="LC882" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L883" class="blob-num js-line-number" data-line-number="883"></td>
        <td id="LC883" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> (i <span class="pl-k">in</span> obj2) {</td>
      </tr>
      <tr>
        <td id="L884" class="blob-num js-line-number" data-line-number="884"></td>
        <td id="LC884" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (<span class="pl-smi">obj2</span>.<span class="pl-en">hasOwnProperty</span>(i)) {</td>
      </tr>
      <tr>
        <td id="L885" class="blob-num js-line-number" data-line-number="885"></td>
        <td id="LC885" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (i <span class="pl-k">in</span> result) {</td>
      </tr>
      <tr>
        <td id="L886" class="blob-num js-line-number" data-line-number="886"></td>
        <td id="LC886" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L887" class="blob-num js-line-number" data-line-number="887"></td>
        <td id="LC887" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L888" class="blob-num js-line-number" data-line-number="888"></td>
        <td id="LC888" class="blob-code blob-code-inner js-file-line">            result[i] <span class="pl-k">=</span> obj2[i];</td>
      </tr>
      <tr>
        <td id="L889" class="blob-num js-line-number" data-line-number="889"></td>
        <td id="LC889" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L890" class="blob-num js-line-number" data-line-number="890"></td>
        <td id="LC890" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L891" class="blob-num js-line-number" data-line-number="891"></td>
        <td id="LC891" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L892" class="blob-num js-line-number" data-line-number="892"></td>
        <td id="LC892" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> result;</td>
      </tr>
      <tr>
        <td id="L893" class="blob-num js-line-number" data-line-number="893"></td>
        <td id="LC893" class="blob-code blob-code-inner js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L894" class="blob-num js-line-number" data-line-number="894"></td>
        <td id="LC894" class="blob-code blob-code-inner js-file-line">    })</td>
      </tr>
      <tr>
        <td id="L895" class="blob-num js-line-number" data-line-number="895"></td>
        <td id="LC895" class="blob-code blob-code-inner js-file-line">    .<span class="pl-en">factory</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>SatellizerStorage<span class="pl-pds">&#39;</span></span>, [<span class="pl-s"><span class="pl-pds">&#39;</span>$window<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>$log<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>SatellizerConfig<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">$window</span>, <span class="pl-smi">$log</span>, <span class="pl-smi">config</span>) {</td>
      </tr>
      <tr>
        <td id="L896" class="blob-num js-line-number" data-line-number="896"></td>
        <td id="LC896" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L897" class="blob-num js-line-number" data-line-number="897"></td>
        <td id="LC897" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> store <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L898" class="blob-num js-line-number" data-line-number="898"></td>
        <td id="LC898" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L899" class="blob-num js-line-number" data-line-number="899"></td>
        <td id="LC899" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// Check if localStorage or sessionStorage is available or enabled</span></td>
      </tr>
      <tr>
        <td id="L900" class="blob-num js-line-number" data-line-number="900"></td>
        <td id="LC900" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> isStorageAvailable <span class="pl-k">=</span> (<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L901" class="blob-num js-line-number" data-line-number="901"></td>
        <td id="LC901" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L902" class="blob-num js-line-number" data-line-number="902"></td>
        <td id="LC902" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> supported <span class="pl-k">=</span> <span class="pl-smi">config</span>.<span class="pl-smi">storageType</span> <span class="pl-k">in</span> $window <span class="pl-k">&amp;&amp;</span> $window[<span class="pl-smi">config</span>.<span class="pl-smi">storageType</span>] <span class="pl-k">!==</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L903" class="blob-num js-line-number" data-line-number="903"></td>
        <td id="LC903" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L904" class="blob-num js-line-number" data-line-number="904"></td>
        <td id="LC904" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (supported) {</td>
      </tr>
      <tr>
        <td id="L905" class="blob-num js-line-number" data-line-number="905"></td>
        <td id="LC905" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> key <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">random</span>().<span class="pl-c1">toString</span>(<span class="pl-c1">36</span>).<span class="pl-c1">substring</span>(<span class="pl-c1">7</span>);</td>
      </tr>
      <tr>
        <td id="L906" class="blob-num js-line-number" data-line-number="906"></td>
        <td id="LC906" class="blob-code blob-code-inner js-file-line">            $window[<span class="pl-smi">config</span>.<span class="pl-smi">storageType</span>].<span class="pl-en">setItem</span>(key, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L907" class="blob-num js-line-number" data-line-number="907"></td>
        <td id="LC907" class="blob-code blob-code-inner js-file-line">            $window[<span class="pl-smi">config</span>.<span class="pl-smi">storageType</span>].<span class="pl-en">removeItem</span>(key);</td>
      </tr>
      <tr>
        <td id="L908" class="blob-num js-line-number" data-line-number="908"></td>
        <td id="LC908" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L909" class="blob-num js-line-number" data-line-number="909"></td>
        <td id="LC909" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L910" class="blob-num js-line-number" data-line-number="910"></td>
        <td id="LC910" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> supported;</td>
      </tr>
      <tr>
        <td id="L911" class="blob-num js-line-number" data-line-number="911"></td>
        <td id="LC911" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">catch</span> (e) {</td>
      </tr>
      <tr>
        <td id="L912" class="blob-num js-line-number" data-line-number="912"></td>
        <td id="LC912" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L913" class="blob-num js-line-number" data-line-number="913"></td>
        <td id="LC913" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L914" class="blob-num js-line-number" data-line-number="914"></td>
        <td id="LC914" class="blob-code blob-code-inner js-file-line">      })();</td>
      </tr>
      <tr>
        <td id="L915" class="blob-num js-line-number" data-line-number="915"></td>
        <td id="LC915" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L916" class="blob-num js-line-number" data-line-number="916"></td>
        <td id="LC916" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span>isStorageAvailable) {</td>
      </tr>
      <tr>
        <td id="L917" class="blob-num js-line-number" data-line-number="917"></td>
        <td id="LC917" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">$log</span>.<span class="pl-en">warn</span>(<span class="pl-smi">config</span>.<span class="pl-smi">storageType</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> is not available.<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L918" class="blob-num js-line-number" data-line-number="918"></td>
        <td id="LC918" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L919" class="blob-num js-line-number" data-line-number="919"></td>
        <td id="LC919" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L920" class="blob-num js-line-number" data-line-number="920"></td>
        <td id="LC920" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L921" class="blob-num js-line-number" data-line-number="921"></td>
        <td id="LC921" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">get</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">key</span>) {</td>
      </tr>
      <tr>
        <td id="L922" class="blob-num js-line-number" data-line-number="922"></td>
        <td id="LC922" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> isStorageAvailable <span class="pl-k">?</span> $window[<span class="pl-smi">config</span>.<span class="pl-smi">storageType</span>].<span class="pl-en">getItem</span>(key) <span class="pl-k">:</span> store[key];</td>
      </tr>
      <tr>
        <td id="L923" class="blob-num js-line-number" data-line-number="923"></td>
        <td id="LC923" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L924" class="blob-num js-line-number" data-line-number="924"></td>
        <td id="LC924" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">set</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">key</span>, <span class="pl-smi">value</span>) {</td>
      </tr>
      <tr>
        <td id="L925" class="blob-num js-line-number" data-line-number="925"></td>
        <td id="LC925" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> isStorageAvailable <span class="pl-k">?</span> $window[<span class="pl-smi">config</span>.<span class="pl-smi">storageType</span>].<span class="pl-en">setItem</span>(key, value) <span class="pl-k">:</span> store[key] <span class="pl-k">=</span> value;</td>
      </tr>
      <tr>
        <td id="L926" class="blob-num js-line-number" data-line-number="926"></td>
        <td id="LC926" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L927" class="blob-num js-line-number" data-line-number="927"></td>
        <td id="LC927" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">remove</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">key</span>) {</td>
      </tr>
      <tr>
        <td id="L928" class="blob-num js-line-number" data-line-number="928"></td>
        <td id="LC928" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> isStorageAvailable <span class="pl-k">?</span> $window[<span class="pl-smi">config</span>.<span class="pl-smi">storageType</span>].<span class="pl-en">removeItem</span>(key)<span class="pl-k">:</span> <span class="pl-k">delete</span> store[key];</td>
      </tr>
      <tr>
        <td id="L929" class="blob-num js-line-number" data-line-number="929"></td>
        <td id="LC929" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L930" class="blob-num js-line-number" data-line-number="930"></td>
        <td id="LC930" class="blob-code blob-code-inner js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L931" class="blob-num js-line-number" data-line-number="931"></td>
        <td id="LC931" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L932" class="blob-num js-line-number" data-line-number="932"></td>
        <td id="LC932" class="blob-code blob-code-inner js-file-line">    }])</td>
      </tr>
      <tr>
        <td id="L933" class="blob-num js-line-number" data-line-number="933"></td>
        <td id="LC933" class="blob-code blob-code-inner js-file-line">    .<span class="pl-en">factory</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>SatellizerInterceptor<span class="pl-pds">&#39;</span></span>, [</td>
      </tr>
      <tr>
        <td id="L934" class="blob-num js-line-number" data-line-number="934"></td>
        <td id="LC934" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>$q<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L935" class="blob-num js-line-number" data-line-number="935"></td>
        <td id="LC935" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>SatellizerConfig<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L936" class="blob-num js-line-number" data-line-number="936"></td>
        <td id="LC936" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>SatellizerStorage<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L937" class="blob-num js-line-number" data-line-number="937"></td>
        <td id="LC937" class="blob-code blob-code-inner js-file-line">      <span class="pl-s"><span class="pl-pds">&#39;</span>SatellizerShared<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L938" class="blob-num js-line-number" data-line-number="938"></td>
        <td id="LC938" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">function</span>(<span class="pl-smi">$q</span>, <span class="pl-smi">config</span>, <span class="pl-smi">storage</span>, <span class="pl-smi">shared</span>) {</td>
      </tr>
      <tr>
        <td id="L939" class="blob-num js-line-number" data-line-number="939"></td>
        <td id="LC939" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L940" class="blob-num js-line-number" data-line-number="940"></td>
        <td id="LC940" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">request</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">request</span>) {</td>
      </tr>
      <tr>
        <td id="L941" class="blob-num js-line-number" data-line-number="941"></td>
        <td id="LC941" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">request</span>.<span class="pl-smi">skipAuthorization</span>) {</td>
      </tr>
      <tr>
        <td id="L942" class="blob-num js-line-number" data-line-number="942"></td>
        <td id="LC942" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">return</span> request;</td>
      </tr>
      <tr>
        <td id="L943" class="blob-num js-line-number" data-line-number="943"></td>
        <td id="LC943" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L944" class="blob-num js-line-number" data-line-number="944"></td>
        <td id="LC944" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L945" class="blob-num js-line-number" data-line-number="945"></td>
        <td id="LC945" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">shared</span>.<span class="pl-en">isAuthenticated</span>() <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">config</span>.<span class="pl-en">httpInterceptor</span>(request)) {</td>
      </tr>
      <tr>
        <td id="L946" class="blob-num js-line-number" data-line-number="946"></td>
        <td id="LC946" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">var</span> tokenName <span class="pl-k">=</span> <span class="pl-smi">config</span>.<span class="pl-smi">tokenPrefix</span> <span class="pl-k">?</span> <span class="pl-smi">config</span>.<span class="pl-smi">tokenPrefix</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>_<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">config</span>.<span class="pl-smi">tokenName</span> <span class="pl-k">:</span> <span class="pl-smi">config</span>.<span class="pl-smi">tokenName</span>;</td>
      </tr>
      <tr>
        <td id="L947" class="blob-num js-line-number" data-line-number="947"></td>
        <td id="LC947" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">var</span> token <span class="pl-k">=</span> <span class="pl-smi">storage</span>.<span class="pl-en">get</span>(tokenName);</td>
      </tr>
      <tr>
        <td id="L948" class="blob-num js-line-number" data-line-number="948"></td>
        <td id="LC948" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L949" class="blob-num js-line-number" data-line-number="949"></td>
        <td id="LC949" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span> (<span class="pl-smi">config</span>.<span class="pl-smi">authHeader</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">config</span>.<span class="pl-smi">authToken</span>) {</td>
      </tr>
      <tr>
        <td id="L950" class="blob-num js-line-number" data-line-number="950"></td>
        <td id="LC950" class="blob-code blob-code-inner js-file-line">                token <span class="pl-k">=</span> <span class="pl-smi">config</span>.<span class="pl-smi">authToken</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> token;</td>
      </tr>
      <tr>
        <td id="L951" class="blob-num js-line-number" data-line-number="951"></td>
        <td id="LC951" class="blob-code blob-code-inner js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L952" class="blob-num js-line-number" data-line-number="952"></td>
        <td id="LC952" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L953" class="blob-num js-line-number" data-line-number="953"></td>
        <td id="LC953" class="blob-code blob-code-inner js-file-line">              <span class="pl-smi">request</span>.<span class="pl-c1">headers</span>[<span class="pl-smi">config</span>.<span class="pl-smi">authHeader</span>] <span class="pl-k">=</span> token;</td>
      </tr>
      <tr>
        <td id="L954" class="blob-num js-line-number" data-line-number="954"></td>
        <td id="LC954" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L955" class="blob-num js-line-number" data-line-number="955"></td>
        <td id="LC955" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L956" class="blob-num js-line-number" data-line-number="956"></td>
        <td id="LC956" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> request;</td>
      </tr>
      <tr>
        <td id="L957" class="blob-num js-line-number" data-line-number="957"></td>
        <td id="LC957" class="blob-code blob-code-inner js-file-line">          },</td>
      </tr>
      <tr>
        <td id="L958" class="blob-num js-line-number" data-line-number="958"></td>
        <td id="LC958" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">responseError</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">response</span>) {</td>
      </tr>
      <tr>
        <td id="L959" class="blob-num js-line-number" data-line-number="959"></td>
        <td id="LC959" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">$q</span>.<span class="pl-en">reject</span>(response);</td>
      </tr>
      <tr>
        <td id="L960" class="blob-num js-line-number" data-line-number="960"></td>
        <td id="LC960" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L961" class="blob-num js-line-number" data-line-number="961"></td>
        <td id="LC961" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L962" class="blob-num js-line-number" data-line-number="962"></td>
        <td id="LC962" class="blob-code blob-code-inner js-file-line">      }])</td>
      </tr>
      <tr>
        <td id="L963" class="blob-num js-line-number" data-line-number="963"></td>
        <td id="LC963" class="blob-code blob-code-inner js-file-line">    .<span class="pl-en">config</span>([<span class="pl-s"><span class="pl-pds">&#39;</span>$httpProvider<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">$httpProvider</span>) {</td>
      </tr>
      <tr>
        <td id="L964" class="blob-num js-line-number" data-line-number="964"></td>
        <td id="LC964" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">$httpProvider</span>.<span class="pl-smi">interceptors</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>SatellizerInterceptor<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L965" class="blob-num js-line-number" data-line-number="965"></td>
        <td id="LC965" class="blob-code blob-code-inner js-file-line">    }]);</td>
      </tr>
      <tr>
        <td id="L966" class="blob-num js-line-number" data-line-number="966"></td>
        <td id="LC966" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L967" class="blob-num js-line-number" data-line-number="967"></td>
        <td id="LC967" class="blob-code blob-code-inner js-file-line">})(<span class="pl-c1">window</span>, <span class="pl-c1">window</span>.<span class="pl-smi">angular</span>);</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="hidden">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59 0.4 0.07 0.55-0.17 0.55-0.38 0-0.19-0.01-0.82-0.01-1.49-2.01 0.37-2.53-0.49-2.69-0.94-0.09-0.23-0.48-0.94-0.82-1.13-0.28-0.15-0.68-0.52-0.01-0.53 0.63-0.01 1.08 0.58 1.23 0.82 0.72 1.21 1.87 0.87 2.33 0.66 0.07-0.52 0.28-0.87 0.51-1.07-1.78-0.2-3.64-0.89-3.64-3.95 0-0.87 0.31-1.59 0.82-2.15-0.08-0.2-0.36-1.02 0.08-2.12 0 0 0.67-0.21 2.2 0.82 0.64-0.18 1.32-0.27 2-0.27 0.68 0 1.36 0.09 2 0.27 1.53-1.04 2.2-0.82 2.2-0.82 0.44 1.1 0.16 1.92 0.08 2.12 0.51 0.56 0.82 1.27 0.82 2.15 0 3.07-1.87 3.75-3.65 3.95 0.29 0.25 0.54 0.73 0.54 1.48 0 1.07-0.01 1.93-0.01 2.2 0 0.21 0.15 0.46 0.55 0.38C13.71 14.53 16 11.53 16 8 16 3.58 12.42 0 8 0z"></path></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.12465s from github-fe136-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15.72 12.5l-6.85-11.98C8.69 0.21 8.36 0.02 8 0.02s-0.69 0.19-0.87 0.5l-6.85 11.98c-0.18 0.31-0.18 0.69 0 1C0.47 13.81 0.8 14 1.15 14h13.7c0.36 0 0.69-0.19 0.86-0.5S15.89 12.81 15.72 12.5zM9 12H7V10h2V12zM9 9H7V5h2V9z"></path></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      
      <script crossorigin="anonymous" integrity="sha256-mJ049JI0h8/Zu3GB/U8aeuHCefKhMY7+nFk/NN6FCHA=" src="https://assets-cdn.github.com/assets/frameworks-989d38f4923487cfd9bb7181fd4f1a7ae1c279f2a1318efe9c593f34de850870.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-+Dri8NSD3dyPGJSzzCcJ/x20hRHdyNBU7WOcUsgNVMk=" src="https://assets-cdn.github.com/assets/github-f83ae2f0d483dddc8f1894b3cc2709ff1db48511ddc8d054ed639c52c80d54c9.js"></script>
      
      
      
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15.72 12.5l-6.85-11.98C8.69 0.21 8.36 0.02 8 0.02s-0.69 0.19-0.87 0.5l-6.85 11.98c-0.18 0.31-0.18 0.69 0 1C0.47 13.81 0.8 14 1.15 14h13.7c0.36 0 0.69-0.19 0.86-0.5S15.89 12.81 15.72 12.5zM9 12H7V10h2V12zM9 9H7V5h2V9z"></path></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
    </button>
  </div>
</div>

  </body>
</html>

