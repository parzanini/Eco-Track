// userPortalManager.js
export default class UserPortalManager {
    // map tab IDs to their corresponding content IDs
    static contentMapping = {
        'up-1': 'profile-content',
        'up-2': 'reports-content',
        'up-3': 'badges-content',
        'up-4': 'milestones-content',
        'up-5': 'community-content',
        'up-6': 'delete-account'
    };

    static hideAllContent() {
        // get content containers
        const contentDivs = document.querySelectorAll('.portal-content');
        // remove the active class to hide all the containers
        contentDivs.forEach(div => {
            div.classList.remove('active');
            div.style.display = 'none';
        });
    }

    static displaySelectedContent(tabId) {
        // call function to hide all containers
        this.hideAllContent();

        // target the desired container related to the selected tab
        const contentId = this.contentMapping[tabId];

        // find selected tab, add active to the related content
        const selectedContent = document.getElementById(contentId);
        if (selectedContent) {
            selectedContent.classList.add('active');
            selectedContent.style.display = 'block';
        } else {
            // handle error
            console.warn(`Content for tab ${tabId} not found`);
        }
    }

    static updateContent(tabId) {
        this.displaySelectedContent(tabId);
    }
}