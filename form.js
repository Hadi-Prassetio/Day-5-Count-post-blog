function submitData(){
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let subject = document.getElementById('subject').value
    let message = document.getElementById('message').value

    if (!name){
        return alert('wajib mengisi nama')
    }else if (!email){
        return alert('wajib mengisi email')
    }else if (!phone){
        return alert('wajib mengisi nomor telfon')
    }else if (!subject){
        return alert('wajib mengisi select')
    }else if (!message){
        return alert ('wajib mengisi pesan')
    }
    
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);

    let emailReceiver = 'hadiprassetio516@gmail.com'
    let a = document.createElement('a')

    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo nama saya ${name} ${message} silahkan hubungi ${phone} Email: ${email}`
    a.click()

    



}