import {useState, useEffect} from 'react'
import "../style.css";

const initialFormValues = {fullname:"", phone_number:""};// inputun içini boşalt
function Form({addContact, contacts}) {

    const [form,setForm] = useState(initialFormValues);

    useEffect(() => {
        setForm(initialFormValues);
    }, [contacts]); // (contacts değiştikten sonra)ekleme işleminden sonra temizleme işlemi için

    // içerik değiştiğinde bunu state'e ataması için gerekli fonsiyon=>onChangeInput işlemi yapılıyor 
    // obje old için setForm({}) -> sonra ...form'un önceki değerlerini koy -> sonra event target name'i value'ya eşitle
    // sonra bu onChangeInput'u inputların onchange proplarına ver
    const onChangeInput = (e) =>{
        setForm({...form, [e.target.name] : e.target.value});
    };

    //form onsubmit olduğunda sayfa yenileniyor=> form etiketinin varsayılan bir davranışıdır. End pointe veriyi gönderir. Bu sayfa yanıleme işlemini durdurma için event. preventDef. yazılır. -> eğer formun altındaki inputlardan biri boşa denk ise formu gönderme
    const onSubmit = (e)=>{
        e.preventDefault();

        if (form.fullname === "" || form.phone_number === ""){
            return false;
        }

        addContact([...contacts,form]); // eski ...verileridegetir, 
    };

  return (
    <form onSubmit={onSubmit}>
        <div >
        <input 
        name='fullname' 
        placeholder='Full Name' 
        value={form.fullname}
        onChange={onChangeInput}
        />
        </div>
        <div>
            <input name='phone_number' 
            placeholder='Phone Number'
            value={form.phone_number}
            onChange={onChangeInput}/>
        </div>
        <div>
            <button className='formButton'>Add</button>
        </div>
    </form>
  );
}

export default Form

//Buradan sonra => kayıtları bir statee eklemek gerekiyorki list componentinde onları listeleyebilelim => Kullanıcıların ekleneceği state'i contacts'in indexin Componentinde tutarsak=> set işlemini yapacak fonksiyonu form komponentine geçersek olur==> Contacts.indexine git 