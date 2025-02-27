import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductPage = () => {
    return ( 
        <div className="p-5 border border-red-500 rounded-xl">
            <h1 className="text-yellow-300">Products</h1>
            <Button>FWS-7</Button>
            <Input placeholder="Projeto iniciado"/>
        </div>
     );
}
 
export default ProductPage;