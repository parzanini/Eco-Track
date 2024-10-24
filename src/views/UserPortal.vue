<!-- UserPortal.vue -->
<script setup>
import UserPortalNavigation from "@/components/UserPortalNavigation.vue";
import UserProfile from "@/components/userPortalComponents/UserProfile.vue";
import UserReports from "@/components/userPortalComponents/UserReports.vue";
import UserBadges from "@/components/userPortalComponents/UserBadges.vue";
import UserMilestones from "@/components/userPortalComponents/UserMilestones.vue";
import UserCommunity from "@/components/userPortalComponents/UserCommunity.vue";
import UserLogOut from "@/components/userPortalComponents/UserLogOut.vue";
import UserPortalManager from "@/components/userPortalComponents/userPortalManager.js";

import { ref, onMounted } from "vue";

const activeTab = ref("profile");

// Handle tab updates
const handleTabUpdate = (tabId) => {
  activeTab.value = tabId;
  UserPortalManager.updateContent(tabId);
};

// Initialize the first tab on mount
onMounted(() => {
  UserPortalManager.displaySelectedContent('up-1');
});
</script>

<template>
  <div class="container">
    <h1 class="heading">User Portal</h1>
    <div class="container">
<!--      call function to update tabs-->
      <UserPortalNavigation @update-tab="handleTabUpdate"/>

      <!-- content containers with corresponding IDs -->
      <div id="profile-content" class="portal-content">
        <UserProfile />
      </div>
      <div id="reports-content" class="portal-content">
        <UserReports />
      </div>
      <div id="badges-content" class="portal-content">
        <UserBadges />
      </div>
      <div id="milestones-content" class="portal-content">
        <UserMilestones />
      </div>
      <div id="community-content" class="portal-content">
        <UserCommunity />
      </div>
      <div id="logout-content" class="portal-content">
        <UserLogOut />
      </div>
    </div>
  </div>
</template>

<style scoped>
.heading {
  font-size: 1.25em;
  text-align: center;
}

.portal-content {
  display: none;
}

.portal-content.active {
  display: block;
}
</style>