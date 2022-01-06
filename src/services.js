import database from './database';
import { ref, onValue} from "firebase/database";
export const getBrandById =(brandId,setBrand)=>{
    const brandsRef = ref(database, 'brands/');
   return onValue(brandsRef, (snapshot) => {
      const data = snapshot.val();
     const result= Object.values(data).filter(brand=> brand.brandId == brandId);
     setBrand(result[0]);
    });
}
export const getInfluencerById=(influencerId,setInfluencer)=>{
    const influencersRef = ref(database, 'Influencers/');
onValue(influencersRef, (snapshot) => {
    const data = snapshot.val();
    const influencer= Object.values(data).filter(influencer=> influencer.id == influencerId);
    const {name, img, email} =influencer[0];
    setInfluencer({name,img,email});
});
}
export const getPurchasesByBrandId =(brandId,setPurchases,setInfluencers)=>{
    const purchasesRef = ref(database, 'conversions/');
   return onValue(purchasesRef, (snapshot) => {
      const data = snapshot.val();
      const purchases= Object.values(data.purchase).filter(purchase=> purchase.brandId == brandId);
      const allInfluencers = [...new Set(purchases.map(purchase=> purchase.influencerId))];
      allInfluencers.map(influencerId=> {
const purchasesByInfluencer = purchases.filter(purchase=> purchase.influencerId == influencerId);
const purchasesNumber = purchasesByInfluencer.length;
const reducer = (previousValue, currentValue) =>parseFloat(previousValue)  + parseFloat(currentValue);
const CommissionsAmount = purchasesByInfluencer.map(purchase=> purchase.commissionInfluencer).reduce(reducer);
const influencersRef = ref(database, 'Influencers/');
onValue(influencersRef, (snapshot) => {
    const data = snapshot.val();
    const influencer= Object.values(data).filter(influencer=> influencer.id == influencerId);
    const {name, img, email} =influencer[0];
    const influencerData = {name, img, email};
    setInfluencers(influencers=> [...influencers,{influencerId,influencerData,purchasesNumber,CommissionsAmount}]);
});
      });
      
      setPurchases(purchases);
    });
}
