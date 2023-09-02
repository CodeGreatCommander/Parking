import { useRef } from "react";
import Card from "../templates/card";
import Input from "../templates/input";
export default function Parking_slot_adder() {
  const nameRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const ownerRef = useRef<HTMLInputElement>(null);
  const spacesRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();


    if (imageRef.current?.files?.[0]) {
      const imageFile = imageRef.current.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.result && typeof reader.result === "string") {
          const base64ImageData = reader.result.split(',')[1];
          const formData = {
            name: nameRef.current?.value ?? "",
            location: locationRef.current?.value ?? "",
            price: priceRef.current?.value ?? "",
            owner: ownerRef.current?.value ?? "",
            spaces: spacesRef.current?.value ?? "",
            img: base64ImageData
          }
          // console.log(formData)
          // Continue with the fetch and submit logic
          const domainName = window.location.origin;
          fetch(`${domainName}/api/parking_slot/`, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(formData),
          })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error("Error uploading image:", error));
        }
      };

      reader.readAsDataURL(imageFile); // Convert image to base64
    }
  }
  return (
    <div>
      <Card>
        <form onSubmit={handleSubmit}>
          <Input type="string" placeholder="Name" label="Name" refs={nameRef} required />
          <Input type="string" label="Location" placeholder="Please Describe the place" wide={true} refs={locationRef} required />
          <div className="flex flex-row">
            <Input type="number" placeholder="0" label="Price" refs={priceRef} required />
            <Input type="string" placeholder="Please enter your name" label="Owner" refs={ownerRef} required /></div>
          <Input type="number" placeholder="How many parking spaces are you willing to allot(Recommended atleast 10)" label="Spaces" refs={spacesRef} required />
          <div className="flex flex-row my-7">
            <label className="mx-1 font-bold text-xl"> Image of the destination: </label><input type="file" multiple accept=".png, .jpg, .jpeg" ref={imageRef} required /></div>
          <button className="bg-blue-500 text-white w-full text-2xl py-1 rounded-sm hover:bg-blue-600">Submit</button>
        </form></Card>
    </div>
  )
}