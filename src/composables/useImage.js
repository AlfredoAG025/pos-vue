import { ref } from 'vue'
import { useFirebaseStorage, } from 'vuefire'
import { ref as storageRef, uploadBytesResumable } from 'firebase/storage'
import { uid } from 'uid'

export default function useImage() {

    const storage = useFirebaseStorage()
    const file = ref(null)

    const onFileChange = e => {
        file.value = e.target.files[0]
        console.log(file.value)
        const filename = uid + '.jpg'
        const sRef = storageRef(storage, '/products/' + filename)

        // Sube el archivo
        const uploadTask = uploadBytesResumable(sRef, file.value)

        uploadTask.on('state_changed',
            (snapshot) => {
                // Puedes manejar el progreso de la subida aquí
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                console.log('Upload is ' + progress + '% done')
            },
            (error) => console.log(error),
            () => {
                console.log(uploadTask.snapshot.ref)
            }
        )

    }

    return {
        onFileChange,
    }
}