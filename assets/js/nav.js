// HIGHLIGHT BLUE TEXT //
const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
        link.classList.add("active");
    }
});

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none'
}

// MODAL //
document.addEventListener('DOMContentLoaded', function() {

    const techSupportBtns = document.querySelectorAll('.tech-support-btn');
    const techSupportModal = document.getElementById('techSupportModal');
    const modalCloseBtn = document.getElementById('techSupportModalCloseBtn');

    const messageOption = document.getElementById('messageOption');
    const callOption = document.getElementById('callOption');
    const emailOption = document.getElementById('emailOption');

    const messageModal = document.getElementById('messageModal');
    const callModal = document.getElementById('callModal');
    const emailModal = document.getElementById('emailModal');

    const messageModalCloseBtn = document.getElementById('messageModalCloseBtn');
    const callModalCloseBtn = document.getElementById('callModalCloseBtn');
    const emailModalCloseBtn = document.getElementById('emailModalCloseBtn');


    /* ===============================
       OPEN TECH SUPPORT MODAL
    =============================== */

    techSupportBtns.forEach(function(btn) {

        btn.addEventListener('click', function() {

            techSupportModal.classList.add('active');

            // Close Bootstrap offcanvas if open (mobile)
            const offcanvas = document.querySelector('.offcanvas.show');
            if (offcanvas) {
                const instance = bootstrap.Offcanvas.getInstance(offcanvas);
                if (instance) instance.hide();
            }

        });

    });


    /* ===============================
       CLOSE TECH SUPPORT MODAL
    =============================== */

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', function() {
            techSupportModal.classList.remove('active');
        });
    }

    if (techSupportModal) {
        techSupportModal.addEventListener('click', function(e) {
            if (e.target === this) {
                techSupportModal.classList.remove('active');
            }
        });
    }


    /* ===============================
       OPEN SECONDARY MODALS
    =============================== */

    if (messageOption) {
        messageOption.addEventListener('click', function() {
            techSupportModal.classList.remove('active');
            messageModal.classList.add('active');
        });
    }

    if (callOption) {
        callOption.addEventListener('click', function() {
            techSupportModal.classList.remove('active');
            callModal.classList.add('active');
        });
    }

    if (emailOption) {
        emailOption.addEventListener('click', function() {
            techSupportModal.classList.remove('active');
            emailModal.classList.add('active');
        });
    }


    /* ===============================
       CLOSE SECONDARY MODALS
    =============================== */

    if (messageModalCloseBtn) {
        messageModalCloseBtn.addEventListener('click', function() {
            messageModal.classList.remove('active');
        });
    }

    if (callModalCloseBtn) {
        callModalCloseBtn.addEventListener('click', function() {
            callModal.classList.remove('active');
        });
    }

    if (emailModalCloseBtn) {
        emailModalCloseBtn.addEventListener('click', function() {
            emailModal.classList.remove('active');
        });
    }


    /* ===============================
       CLOSE WHEN CLICK OUTSIDE
    =============================== */

    [messageModal, callModal, emailModal].forEach(function(modal) {

        if (!modal) return;

        modal.addEventListener('click', function(e) {

            if (e.target === modal) {
                modal.classList.remove('active');
            }

        });

    });


    /* ===============================
       ESC KEY CLOSE
    =============================== */

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {


            if (messageModal && messageModal.classList.contains('active')) {
                messageModal.classList.remove('active');
                techSupportModal.classList.add('active');

            } else if (callModal && callModal.classList.contains('active')) {
                callModal.classList.remove('active');
                techSupportModal.classList.add('active');

            } else if (emailModal && emailModal.classList.contains('active')) {
                emailModal.classList.remove('active');
                techSupportModal.classList.add('active');

            } else if (techSupportModal && techSupportModal.classList.contains('active')) {

                techSupportModal.classList.remove('active');
            }

        }
    });

});