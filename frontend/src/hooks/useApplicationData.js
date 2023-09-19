const { useState } = require("react")

 function useApplicationData() {
  const [fevPhoto, setFevPhoto] = useState([]);
 const [isModalOpen, setIsModalOpen] = useState(false);
 const [selectedPhoto, setSelectedPhoto] = useState(null);

 const photos = new Array(3).fill({});
 const onPhotoClick = (photo) => {
  setIsModalOpen(true);
  setSelectedPhoto(photo);
};
const closeModal = () => {
  setIsModalOpen(false);
  setSelectedPhoto(null);
};
const handleFevPhoto = (photoId) => {
  setFevPhoto((proveState) => {
    if (!proveState.includes(photoId)) {
     return  [...proveState, photoId];
    } else { 
      const removeLike = fevPhoto.filter(id => {
         return id !== photoId
      });
       return [...removeLike]
    }})
};

return {
  handleFevPhoto,
  closeModal,
  onPhotoClick,
  photos,
  selectedPhoto,
  fevPhoto,
  setSelectedPhoto,
  isModalOpen

}
}

export default useApplicationData