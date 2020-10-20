<template>
    <div class="bg-gray-200">
        <div class="container mt-40 flex mx-auto text-left">
            <div class="w-1/2 my-5">
                <div >
                    <strong class="text-xl">Napíšte nám</strong>
                    <p>V prípade akýchkoľvek otázok nás neváhajte kontaktovať na jednom z uvedených linkov.</p>
                </div>
            </div>
            <div class="w-1/2 mx-24">
                <div>
                <ContactItem
                    v-for="(item, index) in items"
                    :key="index"
                    :msg="item.msg"
                    :icon="item.icon"
                >
                </ContactItem>
                </div>  
            </div>
        </div>
  

    </div>

    
</template>

<script>

import ContactItem from '@/components/ContactItem.vue';

export default {
    components: {
		ContactItem
    },
    data: function() {
		return {
            items :[
                {
                    msg:'tim10fiit@googlegroups.com',
                    icon: 'far fa-envelope'
                },
                {
                    msg:'Fakulta informatiky a informačných technologií' +
                    'Slovenská Technická Univerzita v Bratislave' +
                    'Iľkovičova 2' +
                    '842 16 Bratislava',
                    icon:'fas fa-map-marker-alt'
                }
            ]
		};
	}
}
</script>