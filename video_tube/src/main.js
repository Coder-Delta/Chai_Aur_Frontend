import './style.css';

// Feature imports
import { initUser } from './user/index.js';
import { initVideo } from './video/index.js';
import { initComment } from './comment/index.js';
import { initLike } from './like/index.js';
import { initPlaylist } from './playlist/index.js';
import { initSubscription } from './subscription/index.js';
import { initTweet } from './tweet/index.js';
import { initDashboard } from './dashboard/index.js';
import { initHealthcheck } from './healthcheck/index.js';

// App bootstrap
function bootstrapApp() {
  console.log("Frontend App Started");

  initUser();
  initVideo();
  initComment();
  initLike();
  initPlaylist();
  initSubscription();
  initTweet();
  initDashboard();
  initHealthcheck();
}

// Run app when DOM is ready
document.addEventListener("DOMContentLoaded", bootstrapApp);
