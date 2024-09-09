let balance = 1000;

function depositMoney() {
    const depositAmount = parseFloat(document.getElementById('depositAmount').value);
    if (!isNaN(depositAmount) && depositAmount > 0) {
        balance += depositAmount;
        document.getElementById('balance').textContent = `Account Balance: $${balance.toFixed(2)}`;
        document.getElementById('depositAmount').value = '';
    } else {
        alert('Please enter a valid amount to deposit.');
    }
}

function withdrawMoney() {
    const withdrawAmount = parseFloat(document.getElementById('withdrawAmount').value);
    if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
        if (withdrawAmount <= balance) {
            balance -= withdrawAmount;
            document.getElementById('balance').textContent = `Account Balance: $${balance.toFixed(2)}`;
            document.getElementById('withdrawAmount').value = '';
        } else {
            alert('Insufficient balance for this withdrawal.');
        }
    } else {
        alert('Please enter a valid amount to withdraw.');
    }
}