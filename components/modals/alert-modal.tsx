'use cleint'
import { useEffect, useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";


interface AlertMoadlProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    loading: boolean;
}

export const AlertModal: React.FC<AlertMoadlProps> = ({ isOpen, onClose, onConfirm, loading }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) null;

    return (
        <Modal
            title="Are you sure?"
            description="This action cannot be undone"
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="pt-6 space-x-2 flex item-center justify-end w-full">
                <Button disabled={loading} variant='outline' onClick={onClose}>Cancel</Button>
                <Button disabled={loading} variant='destructive' onClick={onConfirm} >Continue</Button>
            </div>
        </Modal>
    )
}