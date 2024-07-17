<script setup>
import useImage from '@/composables/useImage'
import Link from '@/components/Link.vue'

const { onFileChange } = useImage()
</script>

<template>
    <div>
        <Link to="products">
        Volver
        </Link>

        <h1 class="my-10 text-4xl font-black">Nuevo Producto</h1>

        <div class="flex justify-center bg-white shadow">
            <div class="w-full p-10 mt-10 2xl:w-2/4">
                <FormKit type="form" submit-label="Agregar Producto">
                    <FormKit type="text" label="Nombre" name="name" placeholder="Nombre de Producto"
                        validation="required"
                        :validation-messages="{ required: 'El Nombre del Producto es Obligatorio' }" />

                    <FormKit type="file" label="Image Producto" name="image" accept=".jpg" multiple="false"
                        validation="required"
                        :validation-messages="{ required: 'La Imagen del Producto es Obligatoria' }" 
                        @change="onFileChange"
                        />

                    <FormKit type="select" label="Categoría" name="category" :options="[1, 2, 3]" validation="required"
                        :validation-messages="{ required: 'La Categoría es Obligatoria' }" />

                    <FormKit type="number" label="Precio" name="price" placeholder="Precio de Producto"
                        min="1"
                        validation="required"
                        :validation-messages="{ required: 'El Precio del Producto es Obligatorio' }" />
                    
                        <FormKit type="number" label="Disponibles" name="availability" placeholder="Cantidad Disponible de Producto"
                        min="1"
                        validation="required"
                        :validation-messages="{ required: 'La Cantidad Disponible del Producto es Obligatoria' }" />
                </FormKit>
            </div>
        </div>


    </div>
</template>
