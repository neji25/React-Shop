import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Холодильники"},
            {id: 2, name: "Смартфоны"}
        ]
        this._brands = [
            {id: 1, name: "Samsung"},
            {id: 2, name: "Apple"}
        ]
        this._devices = [
            {id: 1, name: "Iphone 12 pro", price: 25000, raiting: 5, img: "https://cdnb.artstation.com/p/marketplace/presentation_assets/001/039/809/large/file.jpg?1625573132"},
            {id: 2, name: "Iphone 12 pro", price: 25000, raiting: 5, img: "https://cdnb.artstation.com/p/marketplace/presentation_assets/001/039/809/large/file.jpg?1625573132"},
            {id: 3, name: "Iphone 12 pro", price: 25000, raiting: 5, img: "https://cdnb.artstation.com/p/marketplace/presentation_assets/001/039/809/large/file.jpg?1625573132"},
            {id: 4, name: "Iphone 12 pro", price: 25000, raiting: 5, img: "https://cdnb.artstation.com/p/marketplace/presentation_assets/001/039/809/large/file.jpg?1625573132"},
            {id: 5, name: "Iphone 12 pro", price: 25000, raiting: 5, img: "https://cdnb.artstation.com/p/marketplace/presentation_assets/001/039/809/large/file.jpg?1625573132"},
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }
}