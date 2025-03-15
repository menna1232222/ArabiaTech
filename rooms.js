let storedUserId = localStorage.getItem("userID");
        function selectRoom(roomNumber) {
            if(roomNumber==1){
                window.location.href = 'https://meet.google.com/imt-muab-fux';
            }
            else if(roomNumber==2){
                
                window.location.href = 'https://meet.google.com/juh-sxmb-cha';
            }
            else if(roomNumber==3){
                window.location.href = 'https://meet.google.com/mxk-wpem-kfx';

            }
            else if(roomNumber==4){
                window.location.href = 'https://meet.google.com/rww-uxzh-uff'; 

            }
            else if(roomNumber==5){
                window.location.href = 'https://meet.google.com/bgk-zbnr-izz';

            }
            else if(roomNumber==6){
                window.location.href = 'https://meet.google.com/mxm-xaio-khj';

            }
            else if(roomNumber==7){
                window.location.href = 'https://meet.google.com/qom-dhwn-gmp';

            }
            else if(roomNumber==8){
                window.location.href = 'https://meet.google.com/ged-pnox-xcm';

            }
            else if(roomNumber==9){
                window.location.href = 'https://meet.google.com/jrj-dkdk-bhs';

            }
            else if(roomNumber==10){
                window.location.href = 'https://meet.google.com/ard-asjc-ijg';

            }
            else if(roomNumber==11){
                window.location.href = 'https://meet.google.com/zqr-qbnp-njn';

            }
            else if(roomNumber==12){
                window.location.href = 'https://meet.google.com/ouz-ogsq-vvy';

            }
            
            // Reset all buttons
            buttons.forEach(button => {
                button.style.backgroundColor = 'var(--white)';
                button.style.color = 'var(--text-dark)';
            });
            
            // Highlight selected button
            const selectedButton = buttons[roomNumber - 1];
            selectedButton.style.backgroundColor = 'var(--primary-yellow)';
            selectedButton.style.color = 'var(--text-dark)';
            
            // Show selection message
            setTimeout(() => {
                alert(`You've selected Room ${roomNumber}`);
            }, 300);
        }
        
        
            document.getElementById('logoutBtn').addEventListener('click', function() {
            if (storedUserId){
                localStorage.removeItem('userID');
                localStorage.removeItem('userLevel');
                window.location.href = 'main.html';}
                else{window.location.href = 'main.html';}
            });