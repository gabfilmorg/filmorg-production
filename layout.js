// layout.js - Script para padronizar o layout em todas as páginas

function initSidebar() {
    const currentPath = window.location.pathname;
    const pageName = currentPath.split('/').pop();
    
    const sidebarHTML = `
    <div class="sidebar">
        <div class="sidebar-logo">
            <div class="logo-icon">F</div>
            <div class="logo-text">filmORG</div>
        </div>
        
        <nav class="sidebar-menu">
            <a href="dashboard.html" class="menu-item ${pageName === 'dashboard.html' ? 'active' : ''}">
                <i class="menu-icon ri-dashboard-line"></i>
                <span class="menu-text">Dashboard</span>
            </a>
            <a href="projetos.html" class="menu-item ${pageName === 'projetos.html' || pageName === 'projeto-detalhes.html' ? 'active' : ''}">
                <i class="menu-icon ri-movie-line"></i>
                <span class="menu-text">Projetos</span>
            </a>
            <a href="roteiro.html" class="menu-item ${pageName === 'roteiro.html' || pageName === 'roteiro-editor.html' ? 'active' : ''}">
                <i class="menu-icon ri-draft-line"></i>
                <span class="menu-text">Roteiro</span>
            </a>
            <a href="equipe.html" class="menu-item ${pageName === 'equipe.html' ? 'active' : ''}">
                <i class="menu-icon ri-team-line"></i>
                <span class="menu-text">Equipe</span>
            </a>
            <a href="equipamentos.html" class="menu-item ${pageName === 'equipamentos.html' ? 'active' : ''}">
                <i class="menu-icon ri-camera-line"></i>
                <span class="menu-text">Equipamentos</span>
            </a>
            <a href="analytics.html" class="menu-item ${pageName === 'analytics.html' ? 'active' : ''}">
                <i class="menu-icon ri-bar-chart-line"></i>
                <span class="menu-text">Analytics</span>
            </a>
            <a href="agenda.html" class="menu-item ${pageName === 'agenda.html' ? 'active' : ''}">
                <i class="menu-icon ri-calendar-line"></i>
                <span class="menu-text">Agenda</span>
            </a>
            <a href="orcamento.html" class="menu-item ${pageName === 'orcamento.html' ? 'active' : ''}">
                <i class="menu-icon ri-money-dollar-circle-line"></i>
                <span class="menu-text">Orçamento</span>
            </a>
            <a href="configuracoes.html" class="menu-item ${pageName === 'configuracoes.html' ? 'active' : ''}" style="margin-top: auto;">
                <i class="menu-icon ri-settings-line"></i>
                <span class="menu-text">Configurações</span>
            </a>
        </nav>
    </div>
    <div class="sidebar-overlay"></div>
    `;
    
    const sidebarContainer = document.createElement('div');
    sidebarContainer.id = 'sidebar-container';
    sidebarContainer.innerHTML = sidebarHTML;
    
    const existingSidebar = document.querySelector('.sidebar');
    if (existingSidebar) {
        existingSidebar.parentNode.removeChild(existingSidebar);
    }
    
    const existingOverlay = document.querySelector('.sidebar-overlay');
    if (existingOverlay) {
        existingOverlay.parentNode.removeChild(existingOverlay);
    }
    
    document.body.insertBefore(sidebarContainer, document.body.firstChild);
    
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    
    function toggleSidebar() {
        sidebar.classList.toggle('show');
        if (overlay) {
            overlay.style.display = sidebar.classList.contains('show') ? 'block' : 'none';
        }
    }
    
    function closeSidebar() {
        sidebar.classList.remove('show');
        if (overlay) {
            overlay.style.display = 'none';
        }
    }
    
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleSidebar);
    }
    
    if (overlay) {
        overlay.addEventListener('click', closeSidebar);
    }
    
    const menuLinks = document.querySelectorAll('.menu-item');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                closeSidebar();
            }
        });
    });
    
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeSidebar();
        }
    });
}

document.addEventListener('DOMContentLoaded', initSidebar);