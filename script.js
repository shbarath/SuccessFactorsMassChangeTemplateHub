// Template data and configuration
const templates = {
    'basic-import': {
        name: 'Basic Import',
        category: 'core-employee',
        description: 'Essential employee information for standard data imports',
        version: 'v2.1',
        updated: '2 days ago',
        size: '245 KB',
        downloads: 1240,
        popular: true,
        fields: ['Employee ID', 'First Name', 'Last Name', 'Email', 'Department', 'Job Title', 'Start Date', 'Manager ID']
    },
    'extended-import': {
        name: 'Extended Import',
        category: 'core-employee',
        description: 'Comprehensive employee data with all available fields',
        version: 'v1.9',
        updated: '1 week ago',
        size: '387 KB',
        downloads: 892,
        fields: ['Employee ID', 'Personal Info', 'Contact Details', 'Employment Info', 'Compensation', 'Benefits', 'Custom Fields']
    },
    'biographical-info': {
        name: 'Biographical Information',
        category: 'core-employee',
        description: 'Personal and biographical details management',
        version: 'v1.5',
        updated: '3 days ago',
        size: '198 KB',
        downloads: 567,
        fields: ['Employee ID', 'Date of Birth', 'Nationality', 'Marital Status', 'Education', 'Languages', 'Certifications']
    },
    'personal-info': {
        name: 'Personal Information',
        category: 'core-employee',
        description: 'Personal details and demographic information',
        version: 'v2.0',
        updated: '5 days ago',
        size: '156 KB',
        downloads: 734,
        fields: ['Employee ID', 'Gender', 'Ethnicity', 'Veteran Status', 'Disability Status', 'Preferred Name']
    },
    'global-info': {
        name: 'Global Information',
        category: 'core-employee',
        description: 'Multi-country and global employee data management',
        version: 'v1.8',
        updated: '1 week ago',
        size: '298 KB',
        downloads: 423,
        fields: ['Employee ID', 'Country', 'Legal Entity', 'Time Zone', 'Currency', 'Local ID', 'Tax Information']
    },
    'employment-details': {
        name: 'Employment Details',
        category: 'employment-job',
        description: 'Employment status, start dates, and contract information',
        version: 'v2.3',
        updated: '1 day ago',
        size: '267 KB',
        downloads: 1456,
        popular: true,
        fields: ['Employee ID', 'Employment Status', 'Start Date', 'End Date', 'Contract Type', 'Work Schedule', 'FTE']
    },
    'job-information': {
        name: 'Job Information',
        category: 'employment-job',
        description: 'Job titles, departments, and position specifications',
        version: 'v2.1',
        updated: '2 days ago',
        size: '234 KB',
        downloads: 1123,
        fields: ['Employee ID', 'Job Title', 'Department', 'Division', 'Cost Center', 'Position', 'Job Level', 'Job Family']
    },
    'job-relationships': {
        name: 'Job Relationships',
        category: 'employment-job',
        description: 'Reporting structures and organizational hierarchies',
        version: 'v1.7',
        updated: '4 days ago',
        size: '189 KB',
        downloads: 678,
        fields: ['Employee ID', 'Manager ID', 'Matrix Manager', 'Second Manager', 'HR Representative', 'Relationship Type']
    },
    'global-assignments': {
        name: 'Global Assignments',
        category: 'employment-job',
        description: 'International assignments and expatriate management',
        version: 'v1.4',
        updated: '1 week ago',
        size: '312 KB',
        downloads: 234,
        fields: ['Employee ID', 'Assignment Type', 'Host Country', 'Assignment Start', 'Assignment End', 'Home Location']
    },
    'termination-details': {
        name: 'Termination Details',
        category: 'employment-job',
        description: 'Employee termination and separation management',
        version: 'v1.6',
        updated: '6 days ago',
        size: '178 KB',
        downloads: 456,
        fields: ['Employee ID', 'Termination Date', 'Termination Reason', 'Notice Period', 'Last Working Day', 'Rehire Eligible']
    },
    'phone-info': {
        name: 'Phone Information',
        category: 'contact-personal',
        description: 'Contact numbers and telecommunications data',
        version: 'v1.3',
        updated: '3 days ago',
        size: '134 KB',
        downloads: 567,
        fields: ['Employee ID', 'Mobile Phone', 'Home Phone', 'Work Phone', 'Emergency Phone', 'Phone Type', 'Country Code']
    },
    'email-info': {
        name: 'Email Information',
        category: 'contact-personal',
        description: 'Email addresses and digital communication preferences',
        version: 'v1.5',
        updated: '2 days ago',
        size: '145 KB',
        downloads: 623,
        fields: ['Employee ID', 'Work Email', 'Personal Email', 'Preferred Email', 'Email Type', 'Communication Preferences']
    },
    'addresses': {
        name: 'Addresses',
        category: 'contact-personal',
        description: 'Home, work, and mailing address information',
        version: 'v1.8',
        updated: '5 days ago',
        size: '223 KB',
        downloads: 445,
        fields: ['Employee ID', 'Address Line 1', 'Address Line 2', 'City', 'State/Province', 'Postal Code', 'Country', 'Address Type']
    },
    'emergency-contact': {
        name: 'Emergency Contact',
        category: 'contact-personal',
        description: 'Emergency contact persons and relationship details',
        version: 'v1.2',
        updated: '1 week ago',
        size: '167 KB',
        downloads: 389,
        fields: ['Employee ID', 'Contact Name', 'Relationship', 'Phone Number', 'Email', 'Address', 'Primary Contact']
    },
    'social-accounts': {
        name: 'Social Accounts Information',
        category: 'contact-personal',
        description: 'Professional social media and networking profiles',
        version: 'v1.1',
        updated: '1 week ago',
        size: '112 KB',
        downloads: 156,
        fields: ['Employee ID', 'LinkedIn URL', 'Twitter Handle', 'Professional Website', 'Platform Type', 'Visibility Settings']
    },
    'national-id': {
        name: 'National ID Information',
        category: 'identification',
        description: 'Government identification numbers and citizenship data',
        version: 'v1.6',
        updated: '4 days ago',
        size: '198 KB',
        downloads: 567,
        fields: ['Employee ID', 'National ID', 'ID Type', 'Issue Date', 'Expiry Date', 'Issuing Authority', 'Citizenship']
    },
    'personal-documents': {
        name: 'Personal Documents Information',
        category: 'identification',
        description: 'Passport, visa, and other legal document management',
        version: 'v1.4',
        updated: '6 days ago',
        size: '267 KB',
        downloads: 234,
        fields: ['Employee ID', 'Document Type', 'Document Number', 'Issue Date', 'Expiry Date', 'Issuing Country', 'Status']
    },
    'person-relationship': {
        name: 'Person Relationship',
        category: 'relationships',
        description: 'Family members and dependent relationship management',
        version: 'v1.3',
        updated: '5 days ago',
        size: '189 KB',
        downloads: 345,
        fields: ['Employee ID', 'Related Person ID', 'Relationship Type', 'Start Date', 'End Date', 'Dependent Status', 'Benefits Eligible']
    },
    'recruit-info': {
        name: 'Recruit Information',
        category: 'relationships',
        description: 'Candidate and recruitment process data management',
        version: 'v1.7',
        updated: '3 days ago',
        size: '245 KB',
        downloads: 456,
        fields: ['Candidate ID', 'Application Date', 'Position Applied', 'Source', 'Recruiter', 'Interview Status', 'Offer Details']
    },
    'compensation-info': {
        name: 'Compensation Info',
        category: 'compensation-pay',
        description: 'Base salary, bonus, and total compensation management',
        version: 'v2.2',
        updated: '1 day ago',
        size: '298 KB',
        downloads: 1567,
        popular: true,
        fields: ['Employee ID', 'Base Salary', 'Currency', 'Pay Grade', 'Compa Ratio', 'Merit Increase', 'Effective Date']
    },
    'pay-component-recurring': {
        name: 'Pay Component Recurring',
        category: 'compensation-pay',
        description: 'Ongoing pay elements and recurring compensation items',
        version: 'v1.9',
        updated: '2 days ago',
        size: '234 KB',
        downloads: 789,
        fields: ['Employee ID', 'Component Code', 'Component Amount', 'Frequency', 'Start Date', 'End Date', 'Calculation Method']
    },
    'pay-component-non-recurring': {
        name: 'Pay Component Non Recurring',
        category: 'compensation-pay',
        description: 'One-time payments, bonuses, and special compensation',
        version: 'v1.6',
        updated: '4 days ago',
        size: '178 KB',
        downloads: 567,
        fields: ['Employee ID', 'Component Code', 'Amount', 'Payment Date', 'Reason Code', 'Tax Treatment', 'Approval Status']
    },
    'compound-delete': {
        name: 'Compound Delete',
        category: 'system-operations',
        description: 'Advanced deletion operations for complex data relationships',
        version: 'v1.1',
        updated: '1 week ago',
        size: '145 KB',
        downloads: 123,
        caution: true,
        fields: ['Employee ID', 'Object Type', 'Effective Date', 'Cascade Delete', 'Backup Required', 'Confirmation Flag']
    }
};

// Application state
let recentDownloads = JSON.parse(localStorage.getItem('recentDownloads') || '[]');
let selectedCategory = 'all';
let searchQuery = '';

// DOM elements
const searchInput = document.getElementById('templateSearch');
const categoryFilter = document.getElementById('categoryFilter');
const bulkDownloadBtn = document.getElementById('bulkDownloadBtn');
const downloadModal = document.getElementById('downloadModal');
const previewModal = document.getElementById('previewModal');
const recentDownloadsSection = document.getElementById('recentDownloads');
const recentItemsList = document.getElementById('recentItemsList');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    updateRecentDownloads();
    initializeActionCards();
});

// Event listeners
function initializeEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    
    // Category filter
    categoryFilter.addEventListener('change', handleCategoryFilter);
    
    // Bulk download
    bulkDownloadBtn.addEventListener('click', handleBulkDownload);
    
    // Download buttons
    document.addEventListener('click', function(e) {
        if (e.target.closest('.download-btn')) {
            const templateId = e.target.closest('.download-btn').dataset.template;
            handleDownload(templateId);
        }
        
        if (e.target.closest('.preview-btn')) {
            const templateId = e.target.closest('.template-item').dataset.template;
            handlePreview(templateId);
        }
    });
    
    // Modal close buttons
    document.getElementById('modalClose').addEventListener('click', () => closeModal('downloadModal'));
    document.getElementById('previewModalClose').addEventListener('click', () => closeModal('previewModal'));
    
    // Close modals on outside click
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target.id);
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal('downloadModal');
            closeModal('previewModal');
        }
    });
}

// Action card interactions
function initializeActionCards() {
    const actionCards = document.querySelectorAll('.action-card');
    
    actionCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove active class from all cards
            actionCards.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked card
            this.classList.add('active');
            
            // Filter templates based on selected action
            const category = this.dataset.category;
            filterTemplatesByAction(category);
        });
    });
}

// Search functionality
function handleSearch(e) {
    searchQuery = e.target.value.toLowerCase();
    filterTemplates();
}

// Category filter
function handleCategoryFilter(e) {
    selectedCategory = e.target.value;
    filterTemplates();
}

// Filter templates by action card selection
function filterTemplatesByAction(actionType) {
    const categoryMapping = {
        'people-leader': ['employment-job'],
        'job-info': ['employment-job'],
        'compensation': ['compensation-pay'],
        'job-relationships': ['employment-job', 'relationships']
    };
    
    const categories = categoryMapping[actionType] || [];
    const templateCategories = document.querySelectorAll('.template-category');
    
    templateCategories.forEach(category => {
        const categoryType = category.dataset.category;
        const shouldShow = categories.length === 0 || categories.includes(categoryType);
        
        category.style.display = shouldShow ? 'block' : 'none';
        
        if (shouldShow) {
            category.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start',
                inline: 'nearest'
            });
        }
    });
    
    // Update page with animation
    setTimeout(() => {
        if (categories.length > 0) {
            showNotification(`Filtered templates for ${actionType.replace('-', ' ')} changes`, 'info');
        }
    }, 500);
}

// General template filtering
function filterTemplates() {
    const templateItems = document.querySelectorAll('.template-item');
    const templateCategories = document.querySelectorAll('.template-category');
    
    templateItems.forEach(item => {
        const templateId = item.dataset.template;
        const template = templates[templateId];
        
        if (!template) return;
        
        const matchesSearch = !searchQuery || 
            template.name.toLowerCase().includes(searchQuery) ||
            template.description.toLowerCase().includes(searchQuery);
            
        const matchesCategory = selectedCategory === 'all' || 
            template.category === selectedCategory;
            
        item.style.display = (matchesSearch && matchesCategory) ? 'flex' : 'none';
    });
    
    // Show/hide categories based on visible items
    templateCategories.forEach(category => {
        const visibleItems = category.querySelectorAll('.template-item[style*="flex"]');
        const hasVisibleItems = visibleItems.length > 0;
        
        category.style.display = hasVisibleItems ? 'block' : 'none';
        
        // Update template count
        const countElement = category.querySelector('.template-count');
        if (countElement) {
            countElement.textContent = `${visibleItems.length} template${visibleItems.length !== 1 ? 's' : ''}`;
        }
    });
}

// Download functionality
function handleDownload(templateId) {
    const template = templates[templateId];
    if (!template) return;
    
    // Add to recent downloads
    addToRecentDownloads(template);
    
    // Show download modal
    showDownloadModal(template);
    
    // Simulate download progress
    simulateDownload(template);
    
    // Track analytics
    trackDownload(templateId);
}

// Preview functionality
function handlePreview(templateId) {
    const template = templates[templateId];
    if (!template) return;
    
    showPreviewModal(template);
}

// Bulk download functionality
function handleBulkDownload() {
    const visibleTemplates = Array.from(document.querySelectorAll('.template-item[style*="flex"], .template-item:not([style])'))
        .map(item => item.dataset.template)
        .filter(id => templates[id]);
    
    if (visibleTemplates.length === 0) {
        showNotification('No templates available for bulk download', 'warning');
        return;
    }
    
    const confirmed = confirm(`Download ${visibleTemplates.length} templates? This may take a few moments.`);
    if (!confirmed) return;
    
    // Add all to recent downloads
    visibleTemplates.forEach(templateId => {
        addToRecentDownloads(templates[templateId]);
    });
    
    // Show bulk download progress
    showBulkDownloadProgress(visibleTemplates);
    
    // Track bulk download
    trackBulkDownload(visibleTemplates.length);
}

// Modal functions
function showDownloadModal(template) {
    const modal = document.getElementById('downloadModal');
    const templateName = document.getElementById('downloadTemplateName');
    const downloadSize = document.getElementById('downloadSize');
    
    templateName.textContent = template.name;
    downloadSize.textContent = template.size || '~245 KB';
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function showPreviewModal(template) {
    const modal = document.getElementById('previewModal');
    const previewContent = document.getElementById('previewContent');
    
    // Generate preview content
    const preview = generateTemplatePreview(template);
    previewContent.textContent = preview;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
    document.body.style.overflow = '';
    
    // Reset progress if it's the download modal
    if (modalId === 'downloadModal') {
        resetDownloadProgress();
    }
}

// Download simulation
function simulateDownload(template) {
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    let progress = 0;
    const duration = 2000 + Math.random() * 1000; // 2-3 seconds
    const interval = 50;
    const increment = (100 / duration) * interval;
    
    progressText.textContent = 'Preparing download...';
    
    const timer = setInterval(() => {
        progress += increment;
        
        if (progress >= 100) {
            progress = 100;
            progressFill.style.width = '100%';
            progressText.textContent = 'Download complete!';
            
            setTimeout(() => {
                closeModal('downloadModal');
                showNotification(`${template.name} downloaded successfully!`, 'success');
                
                // Simulate file download
                downloadFile(template);
            }, 800);
            
            clearInterval(timer);
        } else {
            progressFill.style.width = progress + '%';
            
            if (progress < 30) {
                progressText.textContent = 'Initializing download...';
            } else if (progress < 70) {
                progressText.textContent = 'Downloading template...';
            } else {
                progressText.textContent = 'Finalizing download...';
            }
        }
    }, interval);
}

function resetDownloadProgress() {
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    progressFill.style.width = '0%';
    progressText.textContent = 'Preparing download...';
}

// Bulk download progress
function showBulkDownloadProgress(templateIds) {
    const notification = document.createElement('div');
    notification.className = 'bulk-download-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <h4>Bulk Download in Progress</h4>
            <p>Downloading ${templateIds.length} templates...</p>
            <div class="progress-bar">
                <div class="progress-fill" style="width: 0%"></div>
            </div>
            <div class="progress-details">0 of ${templateIds.length} completed</div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Simulate bulk download
    let completed = 0;
    const progressFill = notification.querySelector('.progress-fill');
    const progressDetails = notification.querySelector('.progress-details');
    
    const timer = setInterval(() => {
        completed++;
        const progress = (completed / templateIds.length) * 100;
        
        progressFill.style.width = progress + '%';
        progressDetails.textContent = `${completed} of ${templateIds.length} completed`;
        
        if (completed >= templateIds.length) {
            clearInterval(timer);
            
            setTimeout(() => {
                notification.remove();
                showNotification(`Successfully downloaded ${templateIds.length} templates!`, 'success');
                
                // Simulate zip file download
                downloadBulkFiles(templateIds);
            }, 1000);
        }
    }, 300);
}

// File download simulation
function downloadFile(template) {
    // Create a blob with sample content
    const content = generateTemplateContent(template);
    const blob = new Blob([content], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    
    // Create download link
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${template.name.replace(/\s+/g, '_')}_Template.xlsx`;
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up
    window.URL.revokeObjectURL(url);
}

function downloadBulkFiles(templateIds) {
    // Simulate creating a zip file
    const zipContent = `Bulk Download - ${templateIds.length} SuccessFactors Templates\n\n` +
        templateIds.map(id => `- ${templates[id].name}`).join('\n');
    
    const blob = new Blob([zipContent], { type: 'application/zip' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `SF_Mass_Change_Templates_Bulk_${new Date().toISOString().split('T')[0]}.zip`;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    window.URL.revokeObjectURL(url);
}

// Content generation
function generateTemplateContent(template) {
    // Generate CSV content for the template
    const headers = template.fields.join(',');
    const sampleRow = template.fields.map(() => '[Sample Data]').join(',');
    
    return `${headers}\n${sampleRow}\n`;
}

function generateTemplatePreview(template) {
    return `Template: ${template.name}
Version: ${template.version}
Category: ${template.category}
Last Updated: ${template.updated}

Description:
${template.description}

Fields Included:
${template.fields.map(field => `• ${field}`).join('\n')}

Usage Instructions:
1. Download the template file
2. Fill in the required employee data
3. Validate data format and completeness
4. Upload to SuccessFactors for mass processing
5. Monitor import results and handle any exceptions

Notes:
- Ensure all mandatory fields are populated
- Follow the data format specifications
- Test with a small dataset before full deployment
- Keep backup of original data`;
}

// Recent downloads management
function addToRecentDownloads(template) {
    const recentItem = {
        id: Math.random().toString(36).substr(2, 9),
        templateName: template.name,
        downloadDate: new Date().toISOString(),
        category: template.category
    };
    
    // Remove existing entry for same template
    recentDownloads = recentDownloads.filter(item => item.templateName !== template.name);
    
    // Add to beginning of array
    recentDownloads.unshift(recentItem);
    
    // Keep only last 10 downloads
    recentDownloads = recentDownloads.slice(0, 10);
    
    // Save to localStorage
    localStorage.setItem('recentDownloads', JSON.stringify(recentDownloads));
    
    // Update UI
    updateRecentDownloads();
}

function updateRecentDownloads() {
    if (recentDownloads.length === 0) {
        recentDownloadsSection.style.display = 'none';
        return;
    }
    
    recentDownloadsSection.style.display = 'block';
    
    recentItemsList.innerHTML = recentDownloads.map(item => `
        <div class="recent-item">
            <h4>${item.templateName}</h4>
            <p>Downloaded ${formatDate(item.downloadDate)}</p>
        </div>
    `).join('');
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    const icon = type === 'success' ? 'fa-check-circle' : 
                type === 'warning' ? 'fa-exclamation-triangle' : 
                type === 'error' ? 'fa-times-circle' : 'fa-info-circle';
    
    notification.innerHTML = `
        <i class="fas ${icon}"></i>
        <span>${message}</span>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add styles if not already present
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                border-radius: 8px;
                padding: 16px 20px;
                box-shadow: 0 10px 25px rgba(0,0,0,0.1);
                display: flex;
                align-items: center;
                gap: 12px;
                z-index: 1001;
                min-width: 300px;
                max-width: 500px;
                animation: slideIn 0.3s ease;
                border-left: 4px solid #0070f2;
            }
            
            .notification-success { border-left-color: #30914c; }
            .notification-warning { border-left-color: #ff7300; }
            .notification-error { border-left-color: #bb0000; }
            
            .notification i:first-child {
                font-size: 18px;
                color: #0070f2;
            }
            
            .notification-success i:first-child { color: #30914c; }
            .notification-warning i:first-child { color: #ff7300; }
            .notification-error i:first-child { color: #bb0000; }
            
            .notification span {
                flex: 1;
                font-weight: 500;
                color: #424242;
            }
            
            .notification-close {
                background: none;
                border: none;
                color: #9e9e9e;
                cursor: pointer;
                padding: 4px;
                border-radius: 4px;
                transition: all 0.2s;
            }
            
            .notification-close:hover {
                background: #f5f5f5;
                color: #424242;
            }
            
            .bulk-download-notification {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: white;
                border-radius: 12px;
                padding: 24px;
                box-shadow: 0 20px 40px rgba(0,0,0,0.15);
                z-index: 1001;
                min-width: 350px;
                border-left: 4px solid #0070f2;
            }
            
            .bulk-download-notification h4 {
                margin: 0 0 8px 0;
                color: #424242;
                font-size: 16px;
                font-weight: 600;
            }
            
            .bulk-download-notification p {
                margin: 0 0 16px 0;
                color: #757575;
                font-size: 14px;
            }
            
            .bulk-download-notification .progress-bar {
                height: 6px;
                background: #eeeeee;
                border-radius: 3px;
                overflow: hidden;
                margin-bottom: 12px;
            }
            
            .bulk-download-notification .progress-fill {
                height: 100%;
                background: linear-gradient(90deg, #0070f2, #0040a3);
                transition: width 0.3s ease;
                border-radius: 3px;
            }
            
            .progress-details {
                font-size: 12px;
                color: #9e9e9e;
                text-align: center;
            }
            
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Analytics tracking
function trackDownload(templateId) {
    // Simulate analytics tracking
    console.log(`Analytics: Template downloaded - ${templateId}`);
    
    // In a real application, this would send data to an analytics service
    // trackEvent('template_download', {
    //     template_id: templateId,
    //     template_name: templates[templateId].name,
    //     category: templates[templateId].category,
    //     timestamp: new Date().toISOString()
    // });
}

function trackBulkDownload(count) {
    console.log(`Analytics: Bulk download - ${count} templates`);
    
    // In a real application:
    // trackEvent('bulk_download', {
    //     template_count: count,
    //     timestamp: new Date().toISOString()
    // });
}

// Utility functions
function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'today';
    if (diffDays === 2) return 'yesterday';
    if (diffDays <= 7) return `${diffDays - 1} days ago`;
    
    return date.toLocaleDateString();
}

// Accessibility enhancements
function enhanceAccessibility() {
    // Add ARIA labels
    const searchBox = document.getElementById('templateSearch');
    searchBox.setAttribute('aria-label', 'Search templates');
    searchBox.setAttribute('role', 'searchbox');
    
    const categoryFilter = document.getElementById('categoryFilter');
    categoryFilter.setAttribute('aria-label', 'Filter templates by category');
    
    // Add keyboard navigation for template items
    const templateItems = document.querySelectorAll('.template-item');
    templateItems.forEach((item, index) => {
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'listitem');
        item.setAttribute('aria-label', `Template: ${item.querySelector('h4').textContent}`);
        
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const downloadBtn = item.querySelector('.download-btn');
                if (downloadBtn) downloadBtn.click();
            }
        });
    });
    
    // Add focus management for modals
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                trapFocus(e, modal);
            }
        });
    });
}

function trapFocus(e, container) {
    const focusableElements = container.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
            lastFocusable.focus();
            e.preventDefault();
        }
    } else {
        if (document.activeElement === lastFocusable) {
            firstFocusable.focus();
            e.preventDefault();
        }
    }
}

// Performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Replace immediate search with debounced version
if (searchInput) {
    searchInput.removeEventListener('input', handleSearch);
    searchInput.addEventListener('input', debounce(handleSearch, 300));
}

// Initialize accessibility when DOM is ready
document.addEventListener('DOMContentLoaded', enhanceAccessibility);

// Service Worker registration for offline capability
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
