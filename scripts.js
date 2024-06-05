function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.style.display = 'none');
    
    const activeTab = document.getElementById(tabId);
    activeTab.style.display = 'block';
}

// Show the first tab by default
document.addEventListener('DOMContentLoaded', () => {
    showTab('feature1');
});
