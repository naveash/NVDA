// קוד JavaScript עבור לוח המחוונים של NVIDIA

// נתונים היסטוריים מורחבים עבור גרף ההכנסות (במיליארדי דולרים)
const revenueDataExtended = {
    labels: ['Q1 FY24', 'Q2 FY24', 'Q3 FY24', 'Q4 FY24', 'Q1 FY25', 'Q2 FY25', 'Q3 FY25', 'Q4 FY25', 'Q1 FY26'],
    datasets: [{
        label: 'הכנסות כוללות',
        data: [7.19, 7.64, 10.33, 22.10, 26.04, 28.65, 33.68, 39.02, 44.10], // נתונים מדויקים יותר
        backgroundColor: 'rgba(52, 211, 153, 0.8)', // ירוק בהיר
        borderColor: 'rgba(16, 185, 129, 1)',
        borderWidth: 2,
        borderRadius: 6,
        hoverBackgroundColor: 'rgba(52, 211, 153, 1)',
    }]
};

// הגדרות עבור גרף ההכנסות
const revenueConfig = {
    type: 'bar',
    data: revenueDataExtended,
    options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1.5, // יחס רוחב לגובה (לדוגמה 1.5:1). זה קריטי למובייל, מקטין את הגובה.
        plugins: {
            title: {
                display: false,
            },
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: '#cbd5e0', // צבע לבן למקרא
                    font: {
                        family: 'Inter',
                        size: 10, // גופן קטן יותר למובייל
                    }
                }
            },
            tooltip: {
                rtl: true,
                titleFont: {
                    family: 'Inter',
                    size: 12, // גופן קטן יותר למובייל
                    weight: 'bold'
                },
                bodyFont: {
                    family: 'Inter',
                    size: 11 // גופן קטן יותר למובייל
                },
                backgroundColor: 'rgba(45, 55, 72, 0.9)', // רקע כהה יותר ל-tooltip
                borderColor: '#6ee7b7', // גבול ירוק ל-tooltip
                borderWidth: 1,
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += new Intl.NumberFormat('he-IL', { style: 'currency', currency: 'USD', minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(context.parsed.y) + ' מיליארד';
                        }
                        return label;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'הכנסות (מיליארדי $)',
                    color: '#cbd5e0',
                    font: {
                        family: 'Inter',
                        size: 10, // גופן קטן יותר למובייל
                        weight: 'bold'
                    }
                },
                ticks: {
                    color: '#a0aec0', // צבע אפור לתוויות ציר
                    font: {
                        family: 'Inter',
                        size: 9 // גופן קטן יותר למובייל
                    },
                    callback: function(value) {
                        return value + ' מיליארד';
                    }
                },
                grid: {
                    color: 'rgba(160, 174, 192, 0.1)', // צבע קווי רשת עדין
                    drawBorder: false,
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'רבעון',
                    color: '#cbd5e0',
                    font: {
                        family: 'Inter',
                        size: 10, // גופן קטן יותר למובייל
                        weight: 'bold'
                    }
                },
                ticks: {
                    color: '#a0aec0',
                    font: {
                        family: 'Inter',
                        size: 9 // גופן קטן יותר למובייל
                    }
                },
                grid: {
                    color: 'rgba(160, 174, 192, 0.1)',
                    drawBorder: false,
                }
            }
        }
    }
};

// נתונים עבור גרף רווח גולמי (Non-GAAP)
const grossMarginData = {
    labels: ['Q1 FY24', 'Q2 FY24', 'Q3 FY24', 'Q4 FY24', 'Q1 FY25', 'Q2 FY25', 'Q3 FY25', 'Q4 FY25', 'Q1 FY26'],
    datasets: [{
        label: 'רווח גולמי Non-GAAP',
        data: [64.6, 64.6, 65.2, 66.1, 66.7, 67.1, 67.5, 66.7, 61.0], // נתונים לדוגמה, התאמה לחיוב H20
        backgroundColor: 'rgba(79, 70, 229, 0.7)', // כחול-סגול
        borderColor: 'rgba(79, 70, 229, 1)',
        borderWidth: 2,
        fill: false, // לא למלא מתחת לקו
        tension: 0.3, // עקמומיות הקו
        pointBackgroundColor: 'rgba(79, 70, 229, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(79, 70, 229, 1)',
    }]
};

// הגדרות עבור גרף רווח גולמי
const grossMarginConfig = {
    type: 'line',
    data: grossMarginData,
    options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1.5, // יחס רוחב לגובה. וודא זהה או דומה לגרף הכנסות
        plugins: {
            title: {
                display: false,
            },
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: '#cbd5e0',
                    font: {
                        family: 'Inter',
                        size: 10, // גופן קטן יותר למובייל
                    }
                }
            },
            tooltip: {
                rtl: true,
                titleFont: {
                    family: 'Inter',
                    size: 12, // גופן קטן יותר למובייל
                    weight: 'bold'
                },
                bodyFont: {
                    family: 'Inter',
                    size: 11 // גופן קטן יותר למובייל
                },
                backgroundColor: 'rgba(45, 55, 72, 0.9)',
                borderColor: '#6ee7b7',
                borderWidth: 1,
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += context.parsed.y.toFixed(1) + '%';
                        }
                        return label;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: false, // לא חייב להתחיל מ-0, אחוזים
                title: {
                    display: true,
                    text: 'אחוז רווח גולמי (%)',
                    color: '#cbd5e0',
                    font: {
                        family: 'Inter',
                        size: 10, // גופן קטן יותר למובייל
                        weight: 'bold'
                    }
                },
                ticks: {
                    color: '#a0aec0',
                    font: {
                        family: 'Inter',
                        size: 9 // גופן קטן יותר למובייל
                    },
                    callback: function(value) {
                        return value + '%';
                    }
                },
                grid: {
                    color: 'rgba(160, 174, 192, 0.1)',
                    drawBorder: false,
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'רבעון',
                    color: '#cbd5e0',
                    font: {
                        family: 'Inter',
                        size: 10, // גופן קטן יותר למובייל
                        weight: 'bold'
                    }
                },
                ticks: {
                    color: '#a0aec0',
                    font: {
                        family: 'Inter',
                        size: 9 // גופן קטן יותר למובייל
                    }
                },
                grid: {
                    color: 'rgba(160, 174, 192, 0.1)',
                    drawBorder: false,
                }
            }
        }
    }
};

// נתונים עבור גרף הכנסות לפי מגזרים (פאי/דונאט)
const segmentRevenueData = {
    labels: ['מרכזי נתונים', 'גימינג', 'ויזואליזציה מקצועית', 'רכב', 'אחרים'],
    datasets: [{
        data: [39.1, 3.8, 0.345, 0.232, 0.63], // במיליארדי דולרים
        backgroundColor: [
            'rgba(52, 211, 153, 0.8)', // ירוק (Data Center)
            'rgba(139, 92, 246, 0.8)', // סגול (Gaming)
            'rgba(251, 191, 36, 0.8)', // צהוב (Pro Vis)
            'rgba(239, 68, 68, 0.8)',  // אדום (Automotive)
            'rgba(100, 116, 139, 0.8)' // אפור (Other)
        ],
        borderColor: '#1a202c', // גבול כהה בין פרוסות
        borderWidth: 2,
        hoverOffset: 10 // אפקט ריחוף
    }]
};

// הגדרות עבור גרף הכנסות לפי מגזרים
const segmentRevenueConfig = {
    type: 'doughnut', // גרף דונאט
    data: segmentRevenueData,
    options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1.2, // יחס רוחב לגובה (קרוב ל-1:1, אבל קצת רחב יותר כדי להכיל את המקרא)
        plugins: {
            legend: {
                position: 'bottom', // מיקום מקרא בתחתית למובייל
                align: 'center',
                labels: {
                    color: '#cbd5e0',
                    font: {
                        family: 'Inter',
                        size: 11, // גופן קטן יותר למובייל
                    },
                    padding: 10 // רווח בין פריטי מקרא
                }
            },
            tooltip: {
                rtl: true,
                titleFont: {
                    family: 'Inter',
                    size: 12, // גופן קטן יותר למובייל
                    weight: 'bold'
                },
                bodyFont: {
                    family: 'Inter',
                    size: 11 // גופן קטן יותר למובייל
                },
                backgroundColor: 'rgba(45, 55, 72, 0.9)',
                borderColor: '#6ee7b7',
                borderWidth: 1,
                callbacks: {
                    label: function(context) {
                        let label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        // הצגת ערך וגם אחוז
                        const value = context.parsed;
                        const total = context.dataset.data.reduce((acc, current) => acc + current, 0);
                        const percentage = ((value / total) * 100).toFixed(1);
                        return label + new Intl.NumberFormat('he-IL', { style: 'currency', currency: 'USD', minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(value) + ' מיליארד ($' + percentage + '%)';
                    }
                }
            }
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        }
    }
};


// יצירת הגרפים כאשר הדף נטען
document.addEventListener('DOMContentLoaded', function() {
    // גרף הכנסות כוללות
    const revenueChartCtx = document.getElementById('revenueChart');
    if (revenueChartCtx) {
        new Chart(revenueChartCtx, revenueConfig);
    }

    // גרף רווח גולמי
    const grossMarginChartCtx = document.getElementById('grossMarginChart');
    if (grossMarginChartCtx) {
        new Chart(grossMarginChartCtx, grossMarginConfig);
    }

    // גרף הכנסות לפי מגזרים
    const segmentRevenueChartCtx = document.getElementById('segmentRevenueChart');
    if (segmentRevenueChartCtx) {
        new Chart(segmentRevenueChartCtx, segmentRevenueConfig);
    }
});

// לוגיקה עבור תפריט הניווט הנגלל במובייל
document.getElementById('nav-toggle').onclick = function() {
    const navContent = document.getElementById('nav-content');
    // Toggle the 'hidden' class based on its current state
    if (navContent.classList.contains('hidden')) {
        navContent.classList.remove('hidden');
        navContent.style.maxHeight = navContent.scrollHeight + "px"; // Opens to full height
    } else {
        navContent.style.maxHeight = "0"; // Closes
        navContent.addEventListener('transitionend', function handler() {
            navContent.classList.add('hidden'); // Add hidden after transition
            navContent.removeEventListener('transitionend', handler);
        });
    }
};

// הוספת פונקציונליות לקישור "מאזן (בקרוב)"
document.getElementById('balance-sheet-link').addEventListener('click', function(event) {
    event.preventDefault(); // מונע ניווט לדף אחר
    alert('הדף "מאזן" נמצא כעת בפיתוח ויעלה בקרוב מאוד! תודה על הסבלנות.');
});

// לוגיקה עבור שליחת הודעה למייל
document.getElementById('send-email-button').addEventListener('click', function() {
    const message = document.getElementById('message-input').value;
    const recipient = 'nave97531@gmail.com'; // **כתובת המייל שלך - עודכנה כאן!**
    const subject = 'הודעה מלוח המחוונים של NVIDIA';
    const body = `שלום,\n\nקיבלת הודעה מלוח המחוונים של NVIDIA:\n\n${message}\n\nבברכה,\nמשתמש לוח המחוונים`;

    // יצירת קישור mailto:
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // פתיחת תוכנת המייל של המשתמש
    window.location.href = mailtoLink;

    // אופציונלי: ניקוי תיבת הטקסט לאחר השליחה
    document.getElementById('message-input').value = '';
});
