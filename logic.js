

async function PharmacyAddDrug(tx) {    
    /**
     * Getting the Factory for creating new events and resources
     */
    let factory = getFactory();
    /**
     * Getting the Patient Registry to update the model later
     */
        return getParticipantRegistry('model.Patient').then((patientRegistry) => {
            /**
             * Pushing the new drug into the patient's pharmacy drug collection
             */
         tx.patient.pharmacyDrugs.push(tx.drug);
         /**
          * Updating the patient with the new details
          */
            patientRegistry.update(tx.patient);
        }).then(() => {
        return getAssetRegistry('model.Pharmacy').then(pharmacyRegistry => {
            return pharmacyRegistry.get(tx.pharmacy.pharmacyId).then(pharmacyAsset => {
           /**
                 * Firing the event of completion
                 */
                let event = factory.newEvent('model', 'PharmacyAddDrugFinished');
                event.details = 'The Drug ' + tx.drug.name +' has been added successfully to ' +
                 tx.patient.firstName + ' ' + tx.patient.lastName + '\'smedical record from pharmacy : ' + pharmacyAsset.name ;
                emit(event);
                });
                })
            })
}


/**
 * PharmacyAddDrug transaction
 * @param {model.PharmacyAddDrugFromPrescription} PharmacyAddDrugFromPrescription
 * @transaction
 * @author Mohamed Abdelhafidh
 */
async function PharmacyAddDrugFromPrescription(tx) {
    /**
     * Getting the Factory, Asset and Participant Registries
     */
    let factory = getFactory();

    return getAssetRegistry('model.Prescription').then((prescriptionRegistry) => {
        return prescriptionRegistry.get(tx.prescriptionId);

    }).then((prescription) => {
        return getParticipantRegistry('model.Patient').then((patientRegistry) => {            
            return getAssetRegistry('model.Drug').then(async (drugRegistry) => {
         const result = await Promise.all(prescription.drugs.map(async (d) => {
         try {
           const res = await drugRegistry.get(d.$identifier).then(async (returnedDrug) => {
             console.log(returnedDrug);
             tx.patient.pharmacyDrugs.push(returnedDrug);
         });
        }
        catch(e) {
            console.log("med");
           };
         })); 
              //let drug = factory.newResource('model', 'Drug', returnedDrug.)
                    
            }).then(() => {
                patientRegistry.update(tx.patient);
            })
        }).then(() => {
            /**
             * Firing the event of completion
             */
            let event = factory.newEvent('model', 'PharmacyAddDrugFinished');
            event.details = 'The Drug  has been added successfully to ' + tx.patient.firstName + ' ' + tx.patient.lastName + '\'smedical record';
            emit(event);
    
        })
    })

}



/**
 * PharmacyAddDrug transaction
 * @param {model.addDrugToPrescription} addDrugToPrescription
 * @transaction
 * @author Mohamed Abdelhafidh
 */
async function addDrugToPrescription(tx) {
    return getAssetRegistry('model.Drug').then((drugRegistry) => {
        var factory = getFactory();
        var drug = factory.newResource('model', 'Drug', tx.drug.drugId);
        drug.name = tx.drug.name;
        drug.manufacturer = tx.drug.manufacturer;
        drug.price = tx.drug.price;
        drug.lotNumber = tx.drug.lotNumber;
        drugRegistry.add(drug);
    }).then(() => {
        return getAssetRegistry('model.Prescription').then((presRegistry) => {
            var factory = getFactory();
            var drugRelation = factory.newRelationship('model', 'Drug', tx.drug.drugId);
                      tx.prescription.drugs.push(drugRelation);
            presRegistry.update(tx.prescription);
    
        });
    })
    
}

/**
 * verifyInteraction transaction
 * @param {model.verifyInteraction} verifyInteraction
 * @transaction
 * @author Mohamed Abdelhafidh
 * @returns {string[]}
 */
async function verifyInteraction(tx) {

    var drugs = tx.patient.pharmacyDrugs;
    let found = [];
    const DRUG_CODE_STR = await request.get('https://rxnav.nlm.nih.gov/REST/rxcui.json?name=' + tx.drugName);
  	//console.log(DRUG_CODE_STR);
    const DRUG_CODE = parseInt(JSON.parse(DRUG_CODE_STR).idGroup.rxnormId[0]);
    await request.get('https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=' + DRUG_CODE).then(async (fullDesc) => {
      Promise.all(JSON.parse(fullDesc).interactionTypeGroup[0].interactionType[0].interactionPair.map(async (data) => {
        try {
                drugs.map(async(dd) => {
            if (data.interactionConcept[1].minConceptItem.name == dd.name) {
                found.push(data.description)
                  }
          });
       }
       catch(e) {
           console.log(e.message);
          };
      }));
      let factory = getFactory();
      let event = factory.newEvent('model', 'returnInteractionResponse');
      event.detail = found;
      emit(event);
    })
    return found;
}


/**
 * addNewDrug transaction
 * @param {model.addNewDrug} addNewDrug
 * @transaction
 * @author Mohamed Abdelhafidh
 */

async function addNewDrug(tx) {

    return getAssetRegistry('model.Drug').then(async (drugRegistry) => {
      const factory = getFactory('model', 'Drug');
      let newDrug = factory.newResource('model', 'Drug', tx.drug.drugId);
      newDrug.name = tx.drug.name;
      newDrug.manufacturer = tx.drug.manufacturer;
      newDrug.price = tx.drug.price;
      newDrug.lotNumber = tx.drug.lotNumber;
      newDrug.date = new Date();
      await drugRegistry.add(newDrug);
  
      let event = factory.newEvent('model', 'AddNewDrugSuccessfully');
      event.detail = "drug with id : " + newDrug.drugId + " has been created successfully";
      emit(event);
  
    });
  }
  

/**
 * PharmacyAddDrug transaction
 * @param {model.PractitionerAddDrug} PractitionerAddDrug
 * @transaction
 */
async function PractitionerAddDrug(tx) {    
    /**
     * Getting the Factory for creating new events and resources
     */
    let factory = getFactory();
    /**
     * Getting the Patient Registry to update the model later
     */
        return getParticipantRegistry('model.Patient').then((patientRegistry) => {
            /**
             * Pushing the new drug into the patient's pharmacy drug collection
             */
                    if(typeof tx.patient.practitionerDrugs !== 'object' || tx.patient.practitionerDrugs === null) {
                     tx.patient.practitionerDrugs = [];
}
         tx.patient.practitionerDrugs.push(tx.drug);
         /**
          * Updating the patient with the new details
          */
            patientRegistry.update(tx.patient);
        }).then(() => {
            return getParticipantRegistry('model.Practitioner').then(practitionerRegistry => {
             return practitionerRegistry.get(tx.practitioner.pratitionerId).then(practitionerParticipant => {
        /**
         * Firing the event of completion
         */
        let event = factory.newEvent('model', 'PractitionerAddDrugFinished');
        event.details = 'The Drug ' + tx.drug.name +' has been added successfully to ' + tx.patient.firstName + ' ' + tx.patient.lastName + '\' medical record';
        console
        emit(event);
        });
        });
        });
    
}
/**
 * PractitionerAddConsultation transaction
 * @param {model.PractitionerAddConsultation} PractitionerAddConsultation
 * @transaction
 */
async function PractitionerAddConsultation(tx) {    
    /**
     * Getting the Factory for creating new events and resources
     */
    let factory = getFactory();
    /**
     * Getting the Patient Registry to update the model later
     */
        return getParticipantRegistry('model.Patient').then((patientRegistry) => {
            /**
             * Pushing the new drug into the patient's pharmacy drug collection
             */
          if(typeof tx.patient.consultations !== 'object' || tx.patient.consultations === null) {
    tx.patient.consultations = [];
}
         tx.patient.consultations.push(tx.consultation);
         /**
          * Updating the patient with the new details
          */
            patientRegistry.update(tx.patient);
    }).then(() => {
          return getParticipantRegistry('model.Patient').then(patientRegistry=>{
        /**
         * Firing the event of completion
         */
        let event = factory.newEvent('model', 'PractitionerAddConsultationFinished');
        event.details = 'The Consultation dated :' + tx.consultation.consultionDate +' has been added successfully to ' + tx.patient.firstName + ' ' + tx.patient.lastName + '\'  medical record';
        console
        emit(event);
        })});
    
}
/**
 * PractitionerAddAllergie transaction
 * @param {model.PractitionerAddAllergie} PractitionerAddAllergie
 * @transaction
 */
 async function PractitionerAddAllergie(tx) {    
    /**
     * Getting the Factory for creating new events and resources
     */
    let factory = getFactory();
    /**
     * Getting the Patient Registry to update the model later
     */
        return getParticipantRegistry('model.Patient').then((patientRegistry) => {
            /**
             * Pushing the new drug into the patient's pharmacy drug collection
             */
          if(typeof tx.patient.allergies !== 'object' || tx.patient.allergies === null) {
    tx.patient.allergies = [];
}
         tx.patient.allergies.push(tx.allergie);
         /**
          * Updating the patient with the new details
          */
            patientRegistry.update(tx.patient);
    }).then(() => {
          return getParticipantRegistry('model.Patient').then(patientRegistry=>{
        /**
         * Firing the event of completion
         */
        let event = factory.newEvent('model', 'PractitionerAddAllergieFinished');
        event.details = 'The Allergie :' + tx.allergie.name +' has been added successfully to ' + tx.patient.firstName + ' ' + tx.patient.lastName + '\'  medical record';
        console
        emit(event);
        })});
    
}
/**
 * PractitionerAddMri transaction
 * @param {model.PractitionerAddMri} PractitionerAddMri
 * @transaction
 */
 async function PractitionerAddMri(tx) {    
    /**
     * Getting the Factory for creating new events and resources
     */
    let factory = getFactory();
    /**
     * Getting the Patient Registry to update the model later
     */
        return getParticipantRegistry('model.Patient').then((patientRegistry) => {
            /**
             * Pushing the new drug into the patient's pharmacy drug collection
             */
          if(typeof tx.patient.mriResults !== 'object' || tx.patient.mriResults === null) {
    tx.patient.mriResults = [];
}
         tx.patient.mriResults.push(tx.mri);
         /**
          * Updating the patient with the new details
          */
            patientRegistry.update(tx.patient);
    }).then(() => {
          return getParticipantRegistry('model.Patient').then(patientRegistry=>{
        /**
         * Firing the event of completion
         */
        let event = factory.newEvent('model', 'PractitionerAddMriFinished');
        event.details = 'The Mri dated :' + tx.patient.mriResults.testDate +' has been added successfully to ' + tx.patient.firstName + ' ' + tx.patient.lastName + '\'  medical record';
        console
        emit(event);
        })});
    
}
/**
 * PractitionerAddLabRes transaction
 * @param {model.PractitionerAddLabRes} PractitionerAddLabRes
 * @transaction
 */
 async function PractitionerAddLabRes(tx) {    
    /**
     * Getting the Factory for creating new events and resources
     */
    let factory = getFactory();
    /**
     * Getting the Patient Registry to update the model later
     */
        return getParticipantRegistry('model.Patient').then((patientRegistry) => {
            /**
             * Pushing the new drug into the patient's pharmacy drug collection
             */
          if(typeof tx.patient.labTestResults !== 'object' || tx.patient.labTestResults === null) {
    tx.patient.labTestResults = [];
}
         tx.patient.labTestResults.push(tx.labTestResults);
         /**
          * Updating the patient with the new details
          */
            patientRegistry.update(tx.patient);
    }).then(() => {
        return getParticipantRegistry('model.Patient').then(patientRegistry=>{
        /**
         * Firing the event of completion
         */
        let event = factory.newEvent('model', 'PractitionerAddLabResFinished');
        event.details = 'The Lab test results dated :' + tx.patient.labTestResults.testDate +' has been added successfully to ' + tx.patient.firstName + ' ' + tx.patient.lastName + '\'  medical record';
        console
        emit(event);
        })});
    
}
/**
 * PractitionerAddChronicDisease transaction
 * @param {model.PractitionerAddChronicDisease} PractitionerAddChronicDisease
 * @transaction
 */
 async function PractitionerAddChronicDisease(tx) {    
    /**
     * Getting the Factory for creating new events and resources
     */
    let factory = getFactory();
    /**
     * Getting the Patient Registry to update the model later
     */
        return getParticipantRegistry('model.Patient').then((patientRegistry) => {
            /**
             * Pushing the new drug into the patient's pharmacy drug collection
             */
          if(typeof tx.patient.chronicDiseases !== 'object' || tx.patient.chronicDiseases === null) {
    tx.patient.chronicDiseases = [];
}
         tx.patient.chronicDiseases.push(tx.chronicDisease);
         /**
          * Updating the patient with the new details
          */
            patientRegistry.update(tx.patient);
    }).then(() => {
        return getParticipantRegistry('model.Patient').then(patientRegistry=>{
        /**
         * Firing the event of completion
         */
        let event = factory.newEvent('model', 'PractitionerAddChronicDiseaseFinished');
        event.details = 'The Chronic Disease : has been added successfully to ' + tx.patient.firstName + ' ' + tx.patient.lastName + '\'  medical record';
        console
        emit(event);
        })});
        
    
}

/**
 * PractitionerAddPrescription transaction
 * @param {model.PractitionerAddPrescription} PractitionerAddPrescription
 * @transaction
 */
async function PractitionerAddPrescription(tx) {    
  /**
   * Getting the Factory for creating new events and resources
   */
  let factory = getFactory();
  /**
   * Getting the Patient Registry to update the model later
   */
      return getParticipantRegistry('model.Patient').then((patientRegistry) => {
          /**
           * Pushing the new drug into the patient's pharmacy drug collection
           */
        if(typeof tx.patient.prescriptions !== 'object' || tx.patient.prescriptions === null) {
  tx.patient.prescriptions = [];
}
       tx.patient.prescriptions.push(tx.prescription);
       /**
        * Updating the patient with the new details
        */
          patientRegistry.update(tx.patient);
  }).then(() => {
      return getParticipantRegistry('model.Patient').then(patientRegistry=>{
      /**
       * Firing the event of completion
       */
      let event = factory.newEvent('model', 'PractitionerAddPrescriptionFinished');
      event.details = 'The Prescription : has been added successfully to ' + tx.patient.firstName + ' ' + tx.patient.lastName + '\'  medical record';
      console
      emit(event);
      })});
      
  
}


/**
 * PatientAddNutrition transaction
 * @param {model.PatientAddNutrition} PatientAddNutrition
 * @transaction
 * @author Ines HBIBI
 */
async function PatientAddNutrition(tx) {    
    
  
  
  
  let factory = getFactory();
 var msg = getAssetRegistry('model.Nutrition')
    .then((nutritionAssetRegistry) => {
  var nutrition = factory.newResource('model', 'Nutrition',tx.nutrition.nutritionId);
    nutrition.name = tx.nutrition.name;
    nutrition.type = tx.nutrition.type;
    nutrition.quantity = tx.nutrition.quantity;
    nutritionAssetRegistry.add(nutrition);
    });
      return getParticipantRegistry('model.Patient').then((patientRegistry) => {
         if(typeof tx.patient.nutrition !== 'object' || tx.patient.nutrition === null) {
  tx.patient.nutrition = [];
}
        
       tx.patient.nutrition.push(tx.nutrition);
       
          patientRegistry.update(tx.patient);
  });
  
}


/**
 * PatientAddNutrition transaction
 * @param {model.PatientAddPhysicalActivity} PatientAddPhysicalActivity
 * @transaction
 * @author Ines HBIBI
 */
async function PatientAddPhysicalActivity(tx) {    
    
    
  let factory = getFactory();
 var msg = getAssetRegistry('model.PhysicalActivity')
    .then((physicalAssetRegistry) => {
  var physical = factory.newResource('model', 'PhysicalActivity',tx.physicalActivity.physicalId);
    physical.type = tx.physicalActivity.type;
    physical.duration = tx.physicalActivity.duration;
   
    physicalAssetRegistry.add(physical);
    });
      return getParticipantRegistry('model.Patient').then((patientRegistry) => {
         if(typeof tx.patient.physicalActivity !== 'object' || tx.patient.physicalActivity === null) {
  tx.patient.physicalActivity = [];
}
        
       tx.patient.physicalActivity.push(tx.physicalActivity);
       
          patientRegistry.update(tx.patient);
  });
  
}
