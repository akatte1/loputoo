<script>
    import Header from "$lib/components/Header.svelte";
</script>

<Header showData={false} />
<div class="px-6">
    <h1 class="text-2xl mb-2">Kuidas mängida?</h1>
    <div class="text-justify">
        <p class="mb-2">Mängu eesmärk on väga lihtne - kindlaks määrata antud pildi tegemise asukoht ja aasta. Asukoht tuleb valida kaardi pealt - marker tuleb panna täpselt sinna kohta, kus pilt on tehtud. Aastaarv tuleb valida vastava riba pealt.</p>    
        <p class="mb-2">Asukoha määramiseks on võimalik kasutada mitmeid erinevaid tunnuseid. Näiteks on linnapiltidel võimalik asukoha tuvastamiseks kasutada hooneid ja tänavaid ning loodusfotode puhul maastikku ja pinnavorme. Aastaarvu määramiseltulevad kasuks ajalooteadmised - kasulik on vaadata näiteks inimeste riietust, välimust ning erinevaid esemeid näiteks autosid, fotoaparaate, telefone jms.</p>
        <p class="mb-2">Ühe pildi eest on võimalik saada maksimaalselt 10 000 punkti - 5000 asukoha eest ja 5000 aasta eest. Asukoha punktid arvutatakse järgmiselt. Ühe kilomeetriga on lubatud eksida, iga järgnev kilomeeter võtab punktisummast maha 50 punkti. Aastaarvu punktid arvutatakse samuti lihtsalt - iga eksitud aasta on väärt 100 punkti.</p>
        <p class="mb-2">Mängida saab nii päevamängu kui kasutajate poolt loodud mänge. Päevamäng, nagu nimi ütleb, on iga päev uus - pildipangast valitakse 5 uut pilti. Kasutajate loodud mängude mängimiseks on vaja teada koodi, mis antakse mängu loojale.</p>
    </div>
</div>
