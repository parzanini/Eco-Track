<!--Date Created: 22/10/2024-->
<!--Author: K00288477 Gary O'Connor-->

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
    <div class="container main-container">
<!--      call function to update tabs-->
      <div class="nav">
      <UserPortalNavigation @update-tab="handleTabUpdate"/>
      </div>

    <div class="content mb-16">
      <!-- content containers with corresponding IDs -->
      <div id="profile-content" class="portal-content content">
        <UserProfile class="min-h-screen"/>
      </div>
      <div id="reports-content" class="portal-content content">
        <UserReports />
      </div>
<!--      <div id="badges-content" class="portal-content content">-->
<!--        <UserBadges />-->
<!--      </div>-->
<!--      <div id="milestones-content" class="portal-content content">-->
<!--        <UserMilestones />-->
<!--      </div>-->
<!--      <div id="community-content" class="portal-content content">-->
<!--        <UserCommunity />-->
<!--      </div>-->
      <div id="logout-content" class="portal-content content">
        <UserLogOut class="min-h-screen"/>
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped>

.portal-content {
  display: none;
}

.portal-content.active {
  display: block;
}

@media (min-width: 1024px){
  .main-container {
    display: grid;
    grid-template-columns: 15% 85%;
  }
  .content {
    margin-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    min-height: 100%;
    min-width: 100%;
  }
  .nav {
    height: 100%;
    background-color: #36ba24;
    padding-top: 1rem;
  }

}

</style>