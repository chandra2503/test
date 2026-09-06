document.addEventListener("DOMContentLoaded", () => {
    const savedProjectsKey = "vnck_added_projects";

    

    let addedProjects = loadAddedProjects();
    let projectsData = [...defaultProjects, ...addedProjects];

    const projectsGrid = document.getElementById("projects-grid");
    const modal = document.getElementById("project-modal");
    const modalCloseBtn = document.getElementById("modal-close-btn");
    const modalBody = document.getElementById("modal-body-content");
    const toastContainer = document.getElementById("toast-container");

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function loadAddedProjects() {
        try {
            return JSON.parse(localStorage.getItem(savedProjectsKey)) || [];
        } catch (error) {
            return [];
        }
    }

    function saveAddedProjects() {
        localStorage.setItem(savedProjectsKey, JSON.stringify(addedProjects));
    }

    function refreshProjectsData() {
        projectsData = [...defaultProjects, ...addedProjects];
    }

    function getProjectIcon(category) {
        return category === "Major Project" ? "fa-microchip" : "fa-laptop-code";
    }

    function renderProjects() {
        projectsGrid.innerHTML = projectsData.map(project => {
            const tagClass = project.category === "Major Project" ? "tag-major" : "tag-mini";
            const techTags = project.tech.map(tech => `<span class="tech-tag">${escapeHtml(tech)}</span>`).join("");

            return `
                <article class="project-card" data-project-id="${project.id}">
                    <div class="card-image-wrapper">
                        <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)}" class="card-image">
                        <span class="category-tag ${tagClass}">${escapeHtml(project.category)}</span>
                    </div>
                    <div class="card-content">
                        <div class="card-title-group">
                            <i class="fa-solid ${getProjectIcon(project.category)} icon-primary"></i>
                            <h3>${escapeHtml(project.title)}</h3>
                        </div>
                        <p class="card-description">${escapeHtml(project.desc)}</p>
                        <div class="tech-stack-group">${techTags}</div>
                        <button class="btn btn-dark w-full view-details-btn" type="button">View Details</button>
                    </div>
                </article>
            `;
        }).join("");
    }

    function openModal(projectId) {
        const project = projectsData.find(item => String(item.id) === String(projectId));
        if (!project) return;

        const tagClass = project.category === "Major Project" ? "tag-major" : "tag-mini";

        modalBody.innerHTML = `
            <span class="category-tag ${tagClass} modal-category">${escapeHtml(project.category)}</span>
            <h3 class="modal-heading">${escapeHtml(project.title)}</h3>
            
            <div class="modal-tech">
                ${project.tech.map(tech => `<span class="tech-tag">${escapeHtml(tech)}</span>`).join("")}
            </div>

            <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)}" class="modal-image">
            
            <p class="modal-description">${escapeHtml(project.desc)}</p>

            <div class="modal-stats">
                <div class="stat-item">
                    <h5>Difficulty Level</h5>
                    <p>${escapeHtml(project.difficulty)}</p>
                </div>
                <div class="stat-item">
                    <h5>Estimated Scope</h5>
                    <p>${escapeHtml(project.duration)}</p>
                </div>
            </div>
        `;

        modal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        modal.classList.add("hidden");
        document.body.style.overflow = "";
    }

    function showToast(message, type = "success") {
        const toast = document.createElement("div");
        toast.className = `toast ${type === "error" ? "toast-error-border" : ""}`;

        const isSuccess = type === "success";
        const iconClass = isSuccess ? "fa-circle-check toast-success" : "fa-circle-exclamation toast-error";

        toast.innerHTML = `
            <i class="fa-solid ${iconClass} toast-icon"></i>
            <span class="toast-message">${escapeHtml(message)}</span>
        `;

        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.classList.add("show");
        }, 10);

        setTimeout(() => {
            toast.classList.remove("show");
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 4000);
    }

    projectsGrid.addEventListener("click", event => {
        const button = event.target.closest(".view-details-btn");
        if (!button) return;

        const card = button.closest(".project-card");
        openModal(card.dataset.projectId);
    });

    modalCloseBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", event => {
        if (event.target === modal) {
            closeModal();
        }
    });

    const mobileBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileLinks = document.querySelectorAll(".mobile-link");
    const menuIcon = mobileBtn.querySelector("i");

    function toggleMenu() {
        mobileMenu.classList.toggle("hidden");
        menuIcon.className = mobileMenu.classList.contains("hidden") ? "fa-solid fa-bars" : "fa-solid fa-xmark";
    }

    mobileBtn.addEventListener("click", toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (!mobileMenu.classList.contains("hidden")) {
                toggleMenu();
            }
        });
    });

    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", event => {
            event.preventDefault();

            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;

            btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Dispatching Message...';
            btn.disabled = true;
            btn.style.opacity = "0.7";
            btn.style.cursor = "not-allowed";

            setTimeout(() => {
                contactForm.reset();
                btn.innerHTML = originalText;
                btn.disabled = false;
                btn.style.opacity = "";
                btn.style.cursor = "";
                showToast("Message sent successfully! Our project desk will contact you soon.");
            }, 1500);
        });
    }

    const nav = document.querySelector("nav");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            nav.style.boxShadow = "var(--shadow-md)";
            nav.style.background = "rgba(255, 255, 255, 0.96)";
        } else {
            nav.style.boxShadow = "none";
            nav.style.background = "rgba(255, 255, 255, 0.9)";
        }
    });

    renderProjects();
});
